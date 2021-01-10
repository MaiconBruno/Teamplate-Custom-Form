

//Show And Cover form
var formStats = true;  
var ShowPassword = true;

    function PassworShow(){
      switch (ShowPassword) {
        case true:
          ShowPassword = false;
          console.log('false');
          document.getElementById('pass-see').style.display="block";
          document.getElementById('pass-no-see').style.display="none";
          document.getElementById('reg-password').setAttribute('type','text');
          document.getElementById('confirm-password').setAttribute('type','text');
          break;
        case false: 
          ShowPassword = true;
          document.getElementById('pass-see').style.display="none";
          document.getElementById('pass-no-see').style.display="block";
          console.log('true');
          document.getElementById('reg-password').setAttribute('type','password');
          document.getElementById('confirm-password').setAttribute('type','password');
      }
    }

    function ShowOrCover() {
     switch (formStats){
        case true:
          formStats = false;
          document.getElementById('form-1').classList.add('cover-form');
          document.getElementById('form-1').classList.remove('show-form');
          document.getElementById('form-2').classList.add('show-form');
          document.getElementById('form-2').classList.remove('cover-form');
          
          console.log('true');
          break;
        case false:
          formStats = true;
          document.getElementById('form-2').classList.add('cover-form');
          document.getElementById('form-2').classList.remove('show-form');
          document.getElementById('form-1').classList.add('show-form');
          document.getElementById('form-1').classList.remove('cover-form');
          console.log('false')
          break;
     }

    }


