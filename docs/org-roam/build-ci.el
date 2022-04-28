(require 'ox-publish)

  (setq org-publish-project-alist
	'(

	  ("org-notes"
	   :base-directory "./"
	   :base-extension "org"
	   :publishing-directory "../public_html/"
	   :recursive t
	   :publishing-function org-html-publish-to-html
	   :headline-levels 4
	   :auto-preamble t
	   )

	  ("org-static"
	   :base-directory "./"
	   :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf\\|svg"
	   :publishing-directory "../public_html/"
	   :recursive t
	   :publishing-function org-publish-attachment
	   )

	  ("org" :components ("org-notes" "org-static"))
	  ))

(org-publish "org" t)

(message "Build complete!")
