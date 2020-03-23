document.getElementById('hour').innerHTML = new Date().getHours();
document.getElementById('minutes').innerHTML = new Date().getMinutes();
document.getElementById('seconds').innerHTML = new Date().getSeconds();
document.getElementById('ms').innerHTML = new Date().getUTCMilliseconds();
// date [class date]

// input value => [id name, sur, apply*]

window.onload = function(){

    document.getElementById('apply-profession').onclick = () =>{
        let PDF = document.getElementsByTagName('input')[4].value;
        document.getElementById('profs').innerHTML = `${PDF}`;
        if(PDF == 'Шахтер'){
            document.getElementById('balance').innerHTML = 285 + '$';
        }
        if(PDF == 'Продавец'){
            document.getElementById('balance').innerHTML = 200 + '$';
        }
        if(PDF == 'Электрик'){
            document.getElementById('balance').innerHTML = 340 + '$';
        }
        if(PDF == 'Программист'){
            document.getElementById('balance').innerHTML = 600 + '$';
        }
        if(PDF == 'Касир'){
            document.getElementById('balance').innerHTML = 146 + '$';
        }
        if(PDF == 'Курьер'){
            document.getElementById('balance').innerHTML = 46 + '$';
        }
        if(PDF == 'Stonks'){
            document.getElementById('balance').innerHTML = 999 + ',' + 999 + ',' + 999 + '$';
        }
        if(PDF == 'Повар'){
            document.getElementById('balance').innerHTML = 174 + '$';
        }
        if(PDF == 'Системный Администратор'){
            document.getElementById('balance').innerHTML = 352 + '$';
        }
        if(PDF == 'Сварщик'){
            document.getElementById('balance').innerHTML = 457 + '$';
        }
        if(PDF == 'Грузчик'){
            document.getElementById('balance').innerHTML = 163 + '$';
        }
        if(PDF == ''){
            document.getElementById('balance').innerHTML = '';
        }
    }

    // Output text from input tag to span tag with ID [name]

    document.getElementById('apply-name').onclick = () => {
        let name = document.getElementsByTagName('input')[0].value;
        document.getElementById('name').innerHTML = `${name}`;
        if(name == 'SadBoys'){
            document.getElementById('name') == true;
        }
        if(name == 'SadBoys'){
            document.getElementById('name').innerHTML = '<a href="pf.html" class="sad">SadBoys</b>';
        }
    }
    // Output text from input tag to span tag with ID [sur]

    document.getElementById('apply-sur').onclick = () => {
        let surname = document.getElementsByTagName('input')[2].value;
        document.getElementById('surname').innerHTML = `${surname}`;
        if(surname == 'Monster'){
            surname == true;
        }
        if(surname == 'Monster'){
            document.getElementById('surname').innerHTML = '<b  class="most">Monster</b>';
        }
    }

    // Output text from input tag to span tag with ID [sur]

    document.getElementById('apply-bal').onclick = () => {
        let balance = document.getElementsByTagName('input')[6].value;
        document.getElementById('balance').innerHTML = `${balance}` + '<b>$</b>';
        if(balance == '228'){
            balance == true;
        }
        if(balance == '228'){
            document.getElementById('balance').innerHTML = '<b class="mems">228$</b>';
        }
        if(balance == '666'){
            document.getElementById('balance').innerHTML = '<b class="mems">666$</b>';
        }
        if(balance > 1000){
            this.balance.style.color = '#ff005e';
        }
        else if(balance > 700){
            this.balance.style.color = '#ff6a00';
        }
        else if(balance < 700){
            this.balance.style.color = '#00ff5a';
        }
    }








    //tp[]
    document.getElementById('top').onclick = () =>{
        document.getElementById('user-icon').style.backgroundPosition = 'top';
    }

    

    document.getElementById('bottom').onclick = () =>{
        document.getElementById('user-icon').style.backgroundPosition = 'bottom';
    }

    document.getElementById('right').onclick = () =>{
        document.getElementById('user-icon').style.backgroundPosition = 'right';
    }

    document.getElementById('left').onclick = () =>{
        document.getElementById('user-icon').style.backgroundPosition = 'left';
    }
    document.getElementById('left').onclick = () =>{
        document.getElementById('user-icon').style.backgroundPosition = 'left';
    }
    document.getElementById('center').onclick = () =>{
        document.getElementById('user-icon').style.backgroundPosition = 'center';
    }
    document.getElementById('sub').onclick = () =>{
        document.getElementById('user-icon').style.backgroundPosition = 'sub';
    }

    document.getElementById('initial').onclick = () =>{
        document.getElementById('user-icon').style.backgroundPosition = 'initial';
    }
    document.getElementById('unset').onclick = () =>{
        document.getElementById('user-icon').style.backgroundPosition = 'unset';
    }




    //image output

    document.getElementById("unnamed").addEventListener("change", function () {
        if (this.files[0]) {
          var fr = new FileReader();
      
          fr.addEventListener("load", function () {
            document.getElementById("user-icon").style.backgroundImage = "url(" + fr.result + ")"; //path to picture
          }, false);
          fr.readAsDataURL(this.files[0]);
        }
      });
    
    }



    
