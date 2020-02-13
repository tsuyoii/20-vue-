window.onload = function(){
    let myImg = document.querySelector('img');

    myImg.onclick = function(){
        let mySrc = myImg.getAttribute('src');
        if(mySrc === 'images/mycard.png'){
            myImg.setAttribute('src','images/logo3.png');
        }else{
            myImg.setAttribute('src','images/mycard.png');
        }
    }
    function setHeading(Lisa){
        let myHeading = document.querySelector('h1');
        myHeading.textContent = 'hello!'+Lisa+'!';
    }
    function setUsername(){
        let myName = prompt('请输入你的名字');
        localStorage.setItem('name',myName);
        setHeading(myName);
    }
    let storedName = localStorage.getItem('name');
    if(!storedName){
        setUsername();
    }else{
        setHeading(storedName);
    }
    let myButton = this.document.querySelector('button');
    myButton.onclick = setUsername;
};
