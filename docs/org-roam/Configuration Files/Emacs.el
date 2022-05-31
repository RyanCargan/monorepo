(message "Hi from your config!")
(add-to-list 'load-path (expand-file-name "modules/" user-emacs-directory))

(defvar bootstrap-version)
(let ((bootstrap-file
       (expand-file-name "straight/repos/straight.el/bootstrap.el" user-emacs-directory))
      (bootstrap-version 5))
  (unless (file-exists-p bootstrap-file)
    (with-current-buffer
        (url-retrieve-synchronously
         "https://raw.githubusercontent.com/raxod502/straight.el/develop/install.el"
         'silent 'inhibit-cookies)
      (goto-char (point-max))
      (eval-print-last-sexp)))
  (load bootstrap-file nil 'nomessage))

(straight-use-package 'use-package)
(setq straight-use-package-by-default t)

(use-package restart-emacs)
;(use-package auto-indent-mode) ; Still bugged? https://github.com/company-mode/company-mode/issues/1002

(use-package move-text
  :init (move-text-default-bindings))

(use-package which-key
  :init (which-key-mode))

;(use-package tree-sitter)
;(use-package tree-sitter-langs)

;(use-package origami
  ;:config
  ;(define-prefix-command 'origami-mode-map)
  ;(global-set-key (kbd "C-c f") 'origami-mode-map)
  ;(global-origami-mode)
  ;; :bind
  ;; (:map origami-mode-map
  ;;  ("o" . origami-open-node)
  ;;  ("O" . origami-open-node-recursively)
  ;;  ("c" . origami-close-node)
  ;;  ("C" . origami-close-node-recursively)
  ;;  ("a" . origami-toggle-node)
  ;;  ("A" . origami-recursively-toggle-node)
  ;;  ("R" . origami-open-all-nodes)
  ;;  ("M" . origami-close-all-nodes)
  ;;  ("v" . origami-show-only-node)
  ;;  ("k" . origami-previous-fold)
  ;;  ("j" . origami-forward-fold)
  ;;  ("x" . origami-reset))
  ;)

(use-package company
    ;:defer t
    ;:init (global-company-mode)
    :after lsp-mode
    :hook (prog-mode . company-mode)
    :bind (:map company-active-map
	     ("<tab>" . company-complete-selection)
	   :map lsp-mode-map
	     ("<tab>" . company-indent-or-complete-common))
    :config
    (progn
      (bind-key [remap completion-at-point] #'company-complete company-mode-map)
      (setq company-tooltip-align-annotations t
            company-show-numbers t)
      (setq company-dabbrev-downcase nil))
    (setq company-minimum-prefix-length 1)
    (setq company-idle-delay 0.0)
    :diminish company-mode)

  (use-package company-quickhelp
    :defer t
    :init (add-hook 'global-company-mode-hook #'company-quickhelp-mode))

  (use-package company-nixos-options)

  ;(add-to-list 'company-backends 'company-nixos-options) ; Buggy. Avoid globals.

(use-package company-box
  :hook (company-mode . company-box-mode))

(use-package nix-mode
  :mode "\\.nix\\'"
  :config
  (add-hook 'nix-mode-hook
	    '(lambda ()
	       (set (make-local-variable 'company-backends)
		    '((company-dabbrev-code company-nixos-options)))))) ; Does the order of the backends in the list matter?

(use-package go-mode)

(use-package js2-mode
  :config
  (add-hook 'js-mode-hook 'js2-minor-mode))

;; (use-package tsi
;;   :straight (tsi :type git :host github :repo "orzechowskid/tsi.el")
;;   :after tree-sitter
;;   :mode ("\\.ts\\'" "\\.tsx\\'" "\\.json\\'" "\\.css\\'" "\\.scss\\'")
;;   :config
;;   ;(require 'tsi-typescript)
;;   ;(require 'tsi-json)
;;   ;(require 'tsi-css)
;;   (tsi-typescript-mode t)
;;   (tsi-json-mode t)
;;   (tsi-css-mode t))

;; (use-package tsx-mode
;;   :straight (tsx-mode :type git :host github :repo "orzechowskid/tsx-mode.el")
;;   ;:after tsi
;;   :mode ("\\.ts\\'" "\\.tsx\\'")
;;   :hook (tsx-mode . lsp-deferred))

(use-package typescript-mode
  :mode ("\\.ts\\'" "\\.tsx\\'")
  :hook (typescript-mode . lsp-deferred)
  :config
  (setq typescript-indent-level 2))
;(use-package deno-fmt
;  :hook (js2-mode typescript-mode))

(use-package ccls
  :straight
  (ccls :host github :repo "ymarkovitch/emacs-ccls"
	       ;:files ("*.el" "out")
	       ;:fork (:host github :repo "ymarkovitch/emacs-ccls")
	)
  :config
  (setq ccls-executable "ccls"))

(use-package nasm-mode)

(use-package kotlin-mode)

(setq debug-on-error t)

(use-package evil)

(use-package org-superstar
  :after org
  :hook (org-mode . org-superstar-mode))

(use-package org-roam
  :init
  (setq org-roam-v2-ack t)
  :custom
  (org-roam-directory "~/dev/work/monorepo/docs/org-roam")
  :bind (("C-c n l" . org-roam-buffer-toggle)
         ("C-c n f" . org-roam-node-find)
         ("C-c n i" . org-roam-node-insert)
         ("C-c n r" . org-roam-node-random)
         (:map org-mode-map
               (("C-M-i"   . completion-at-point)
                ("C-c n o" . org-id-get-create)
                ("C-c n t" . org-roam-tag-add)
                ("C-c n a" . org-roam-alias-add))))
  :config
  (org-roam-setup)
  (setq org-roam-graph-viewer nil))

(use-package treemacs
  :defer t
  :init
  (with-eval-after-load 'winum
    (define-key winum-keymap (kbd "M-0") #'treemacs-select-window))
  :config
  (progn
    (setq treemacs-collapse-dirs                   (if treemacs-python-executable 3 0)
          treemacs-deferred-git-apply-delay        0.5
          treemacs-directory-name-transformer      #'identity
          treemacs-display-in-side-window          t
          treemacs-eldoc-display                   'simple
          treemacs-file-event-delay                5000
          treemacs-file-extension-regex            treemacs-last-period-regex-value
          treemacs-file-follow-delay               0.2
          treemacs-file-name-transformer           #'identity
          treemacs-follow-after-init               t
          treemacs-expand-after-init               t
          treemacs-find-workspace-method           'find-for-file-or-pick-first
          treemacs-git-command-pipe                ""
          treemacs-goto-tag-strategy               'refetch-index
          treemacs-indentation                     1 ; Default 2
          treemacs-indentation-string              " "
          treemacs-is-never-other-window           nil
          treemacs-max-git-entries                 5000
          treemacs-missing-project-action          'ask
          treemacs-move-forward-on-expand          nil
          treemacs-no-png-images                   nil
          treemacs-no-delete-other-windows         t
          treemacs-project-follow-cleanup          nil
          treemacs-persist-file                    (expand-file-name ".cache/treemacs-persist" user-emacs-directory)
          treemacs-position                        'left
          treemacs-read-string-input               'from-child-frame
          treemacs-recenter-distance               0.1
          treemacs-recenter-after-file-follow      nil
          treemacs-recenter-after-tag-follow       nil
          treemacs-recenter-after-project-jump     'always
          treemacs-recenter-after-project-expand   'on-distance
          treemacs-litter-directories              '("/node_modules" "/.venv" "/.cask")
          treemacs-show-cursor                     nil
          treemacs-show-hidden-files               t
          treemacs-silent-filewatch                nil
          treemacs-silent-refresh                  nil
          treemacs-sorting                         'alphabetic-asc
          treemacs-select-when-already-in-treemacs 'move-back
          treemacs-space-between-root-nodes        t
          treemacs-tag-follow-cleanup              t
          treemacs-tag-follow-delay                1.5
          treemacs-text-scale                      nil
          treemacs-user-mode-line-format           nil
          treemacs-user-header-line-format         nil
          treemacs-wide-toggle-width               70
          treemacs-width                           20
          treemacs-width-increment                 1
          treemacs-width-is-initially-locked       t
          treemacs-workspace-switch-cleanup        nil)

    (treemacs-follow-mode t)
    (treemacs-filewatch-mode t)
    (treemacs-fringe-indicator-mode 'always)

    (pcase (cons (not (null (executable-find "git")))
                 (not (null treemacs-python-executable)))
      (`(t . t)
       (treemacs-git-mode 'deferred))
      (`(t . _)
       (treemacs-git-mode 'simple)))

    (treemacs-hide-gitignored-files-mode nil))
  :bind
  (:map global-map
        ("M-0"       . treemacs-select-window)
        ("C-x t 1"   . treemacs-delete-other-windows)
        ("C-x t t"   . treemacs)
        ("C-x t d"   . treemacs-select-directory)
        ("C-x t B"   . treemacs-bookmark)
        ("C-x t C-t" . treemacs-find-file)
        ("C-x t M-t" . treemacs-find-tag)))
(use-package treemacs-evil
  :after (treemacs evil))
(use-package treemacs-projectile
  :after (treemacs projectile))
(use-package treemacs-icons-dired
  :hook (dired-mode . treemacs-icons-dired-enable-once))
(use-package treemacs-magit
  :after (treemacs magit))
(use-package treemacs-persp
  :after (treemacs persp-mode)
  :config (treemacs-set-scope-type 'Perspectives))

(use-package magit)
(use-package git-timemachine)

(use-package find-file-in-project)

(use-package diff-hl
  :config
  (global-diff-hl-mode)
  (diff-hl-flydiff-mode))
;;; Icon pack
;; WARNING: Manual copying/installation of fonts required
(use-package all-the-icons
  :if (display-graphic-p))

;;; Terminal
;; WARNING: Manual install of cmake, libtool-bin and libvterm required
;; WARNING: Manual edit of CMakeLists.txt required
;;          Change libvterm.a to libvterm.so and STATIC to SHARED
;; TODO: Create fork with required edits for lockfile
(use-package vterm)

(use-package icomplete-vertical
  :demand t
  :custom
  (completion-styles '(partial-completion substring))
  (completion-category-overrides '((file (styles basic substring))))
  (read-file-name-completion-ignore-case t)
  (read-buffer-completion-ignore-case t)
  (completion-ignore-case t)
  (completion-ignore-case t)
  (resize-mini-windows t)
  (icomplete-vertical-prospects-height 50)
  :config
  (icomplete-mode)
  (icomplete-vertical-mode)
  :bind (:map icomplete-minibuffer-map
              ("<down>" . icomplete-forward-completions)
              ("C-n" . icomplete-forward-completions)
              ("<up>" . icomplete-backward-completions)
              ("C-p" . icomplete-backward-completions)
              ("C-v" . icomplete-vertical-toggle)))

(setq org-edit-src-content-indentation 0 ; Default 2, 0 redundant if preserve is t.
    org-src-tab-acts-natively t
    org-src-preserve-indentation t)

(use-package ob-go)
(use-package ob-deno)

  (eval-after-load 'org
    (org-babel-do-load-languages
     'org-babel-load-languages
     (append org-babel-load-languages
             '((C . t) ; Should cover C++ as well?
               (python . t)
               (js . t)
               (sass . t)
               (gnuplot . t)
               (sql . t)
               (sqlite .t)
               (shell . t) ; sh/shell?
               (dot . t)
               (makefile . t)
               (java . t)
               (go . t)
	           (deno . t)))))

;; optional (required the typescript.el)
(add-to-list 'org-src-lang-modes '("deno" . typescript))

;; Tangle Directory
(defun org-in-tangle-dir (sub-path)
  "Variable sub-path uses default-directory or gets value from any existing tangle-dir property."
  (expand-file-name sub-path
                    (or
                     (org-entry-get (point) "tangle-dir" 'inherit)
                     (default-directory))))

(setq org-agenda-files (directory-files-recursively "~/dev/work/monorepo/docs/org-roam/" "\\.org$"))

(setq org-confirm-babel-evaluate nil)

(use-package doom-themes
  :config
  (setq doom-themes-enable-bold t
        doom-themes-enable-italic t)

  (load-theme 'doom-vibrant t)

  (doom-themes-visual-bell-config)
  (doom-themes-org-config))

(defvar th-shell-popup-buffer nil)

(defun th-shell-popup ()
    "Open (or close) shell with current working directory matching buffer."
    (interactive)
    (let ((split-width-threshold nil)
          (split-height-threshold 0))

      (unless (buffer-live-p th-shell-popup-buffer)

        (save-window-excursion (vterm "*Popup Shell*"))

        (setq th-shell-popup-buffer (get-buffer "*Popup Shell*")))

      (let ((win (get-buffer-window th-shell-popup-buffer))
            (dir (file-name-directory (or (buffer-file-name)
                                          dired-directory
                                          "~/"))))
        (if win
            (quit-window nil win)
          (pop-to-buffer th-shell-popup-buffer nil t)
          (comint-send-string nil (concat "cd " dir "\n" "clear" "\n"))))))

  (global-set-key (kbd "<f8>") 'th-shell-popup)

(global-unset-key (kbd "C-z"))
(setq inhibit-startup-message t)
(setq default-directory "~/dev/work/monorepo")
(define-key minibuffer-local-completion-map (kbd "SPC") 'self-insert-command) ; Spacebar actually inserts a space in minibuffers now
;;; Function key bindings (F5 to F7 plus F9)
(menu-bar-mode -1)
(tool-bar-mode -1)
(toggle-scroll-bar -1)
(global-set-key [f5] 'menu-bar-mode)
(global-set-key [f6] 'tool-bar-mode)
(global-set-key [f7] 'toggle-scroll-bar)
;;; Select window on hover
(setq mouse-autoselect-window t)
;;; Highlighted word wrap
(global-visual-line-mode)
(setq visual-line-fringe-indicators '(left-curly-arrow right-curly-arrow))
;;; Hide emphasis markers
(setq org-hide-emphasis-markers t)
;;; Indentation
(setq org-startup-indented t)

(with-eval-after-load 'org
  (setq org-format-latex-options (plist-put org-format-latex-options :scale 1.5))
  (setq org-preview-latex-default-process 'dvisvgm)
  (add-to-list 'org-latex-packages-alist '("" "lplfitch"))
  (add-to-list 'org-latex-packages-alist '("" "prooftrees"))
  (add-to-list 'org-latex-packages-alist '("" "amsmath"))
  (add-to-list 'org-latex-packages-alist '("" "mathtools"))

  (plist-put org-format-latex-options :latex-fragment-pre-body "\\forestset{line numbering=false}\n\\mathtoolsset{showonlyrefs}\n")

  (defun org-inject-latex-fragment (orig-func &rest args)
    (setf (car args)
          (concat
           (or (plist-get org-format-latex-options :latex-fragment-pre-body) "")
           (car args)
           (or (plist-get org-format-latex-options :latex-fragment-post-body) "")))
    (apply orig-func args))

  (advice-add 'org-create-formula-image :around #'org-inject-latex-fragment))

(require 'ox-publish)
(setq org-publish-project-alist
          '(

            ("org-notes"
             :base-directory "~/dev/work/monorepo/docs/org-roam/"
             :base-extension "org"
             :publishing-directory "~/dev/work/monorepo/docs/public_html/"
             :recursive t
             :publishing-function org-html-publish-to-html
             :headline-levels 4
             :auto-preamble t
             )

            ("org-static"
             :base-directory "~/dev/work/monorepo/docs/org-roam/"
             :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf\\|svg"
             :publishing-directory "~/dev/work/monorepo/docs/public_html/"
             :recursive t
             :publishing-function org-publish-attachment
             )

            ("org" :components ("org-notes" "org-static"))
            ))

(defun sudo-edit-current-file ()
  (interactive)
  (let ((my-file-name)
        (position))
    (if (equal major-mode 'dired-mode)
        (progn
          (setq my-file-name (dired-get-file-for-visit))
          (find-alternate-file (prepare-tramp-sudo-string my-file-name)))
      (setq my-file-name (buffer-file-name)
            position (point))
      (find-alternate-file (prepare-tramp-sudo-string my-file-name))
      (goto-char position))))

(defun prepare-tramp-sudo-string (tempfile)
  (if (file-remote-p tempfile)
      (let ((vec (tramp-dissect-file-name tempfile)))
        (tramp-make-tramp-file-name
         "sudo"
         ""
         (tramp-file-name-domain vec)
         (tramp-file-name-host vec)
         (tramp-file-name-port vec)
         (tramp-file-name-localname vec)
         (format "ssh:%s@%s|"
                 (tramp-file-name-user vec)
                 (tramp-file-name-host vec))))
    (concat "/sudo:root@localhost:" tempfile)))

(define-key dired-mode-map [s-return] 'sudo-edit-current-file)

(defun my/insert-source-split-elisp ()
  "Insert text at cursor point."
  (interactive)
  (insert "\n#+end_src\n\n#+begin_src elisp")
  (backward-char 18))

(defun my/insert-source-split-cpp ()
  "Insert text at cursor point."
  (interactive)
  (insert "\n#+end_src\n\n#+begin_src cpp")
  (backward-char 16))

(defun my/ib ()
  "Indent buffer."
  (interactive)
  (delete-trailing-whitespace)
  (indent-region (point-min) (point-max) nil)
  (untabify (point-min) (point-max)))

(defun my/query ()
  "Return yes or no."
  (interactive)
  (if (y-or-n-p "Run operation?") "yes" "no"))

(use-package zone-nyan)

(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(warning-suppress-log-types '((comp))))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
