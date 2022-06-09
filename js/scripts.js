const darkMode = document.querySelector('#dark-theme');

const configUser = window.matchMedia('(prefers-color-scheme: dark)');

const localConfigDark = localStorage.getItem('tema');
if(localConfigDark === 'dark') {
    document.body.classList.toggle('dark-theme')
} else if(localConfigDark === 'light') {
    document.body.classList.toggle('light-theme')
}

darkMode.addEventListener('click', () => {
    let colorTheme;
    if(configUser.matches) {
        document.body.classList.toggle('light-theme');
        colorTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    } else{
        document.body.classList.toggle('dark-theme')
        colorTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    }

    localStorage.setItem('tema', colorTheme);
})
