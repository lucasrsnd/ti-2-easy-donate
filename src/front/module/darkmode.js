
export default function darkMode(){
    const toggler = document.getElementById('switch');
    
     toggler.addEventListener('change', async function () {
        if (this.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('darkModeEnabled', 'true');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('darkModeEnabled', 'false');
        }
    });
    
    window.onload = function() {
        const darkModeEnabled = localStorage.getItem('darkModeEnabled');
        if (darkModeEnabled === 'true') {
        toggler.checked = true;
            document.body.classList.add('dark');
        }
      };
    }


