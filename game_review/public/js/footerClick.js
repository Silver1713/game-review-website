

function OnLoadedFoot(){
    $('.link').click(function(){
        var t = $(this).text()
        if (t == 'Home'){
            window.location.href = '/index.html'

        }
        if (t == 'About'){
            showModals('<h4>About Us<h4>','<p>This is a website for CDEV assignment.</p>','')
        }
        if (t == 'Contribute'){
            showModals('<h4>Contribute<h4>','<p>To contribute, request to be a editor by contacting me at <a href="mailto:example_mail@mail.com">example_mail@mail.com</a>.</p>','')

        }

        if (t == 'Terms'){
            showModals('<h4>Terms and Conditions<h4>','<p>By using this website,<br>You have agreed to:<br>1. Not misusing the information given<br>2. Follow and Observe copyright laws<br>3.Don\'t spam the reviews<br>4. Follow community rules.<br>Failure to observe this rules above, will result in being barred from this website.</p>','')
       
        }
    })
}