// a simple extension to block porn keyworks 
// it detect and changes your a site theme automatically 

let printOut=document.getElementsByTagName('body')[0];
(()=>{
    //match for erotic words in the title 
    let matchPorn=/porn|xxx|fuck|hardcore/i;
        if(document.title.match(matchPorn)){
            alert(`this site contains some erotic keywords and will be banned by darkMe extension`)
             printOut.innerHTML='<div class="block"> <h1>Page Blocked by darkMe</h1> </div>';
             let centIt=document.querySelector('.block');
             let sites=['https://www.jw.org','https://www.rccg.org','https://personal-folio.yhoungdev.vercel.app']
                let pick=sites[Math.floor(Math.random()*sites.length)]
            setTimeout(()=> window.location.href=pick,4000)    
        }else {
                //
                if(printOut.style.backgroundColor='white'){
                    printOut.classList.add('join')
                }else {
                    let conf=confirm('this site is not on light theme so will you like to change it to light theme ?')
                        if(conf===true){
                            printOut.classList.add('else ')
                            return true;
                        } else {
                            return false;
                        }
                 }
            
        }
         
})()

