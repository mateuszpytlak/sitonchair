function init() {
    // -------------------DROP DOWN MENU

    const liFirma = document.querySelector('.firma');
    const liGaleria = document.querySelector('.galeria');
    const liKontakt = document.querySelector('.kontakt');

    const ulFirmaDropdown = liFirma.querySelector('.dropdown');
    const ulGaleriaDropdown = liGaleria.querySelector('.dropdown');
    const ulKontaktDropdown = liKontakt.querySelector('.dropdown');

    function showMenu(e) {
        if (e.target.className === 'firma' || e.target.parentNode.className === 'firma') {
            ulFirmaDropdown.style.display = 'block';
        }
        else if (e.target.className === 'galeria' || e.target.parentNode.className === 'galeria') {
            ulGaleriaDropdown.style.display = 'block';
        }
        else if (e.target.className === 'kontakt' || e.target.parentNode.className === 'kontakt') {
            ulKontaktDropdown.style.display = 'block';
        }
    }

    function hideMenu(e) {
        ulFirmaDropdown.style.display = 'none';
        ulGaleriaDropdown.style.display = 'none';
        ulKontaktDropdown.style.display = 'none';
    }

    liFirma.addEventListener('mouseover', showMenu);
    liFirma.addEventListener('mouseout', hideMenu);

    liGaleria.addEventListener('mouseover', showMenu);
    liGaleria.addEventListener('mouseout', hideMenu);

    liKontakt.addEventListener('mouseover', showMenu);
    liKontakt.addEventListener('mouseout', hideMenu);

    //-------------- KONIEC DROPDOWN MENU

    //-------------- Ukrywanie napisów na zdjeciach w sekcji DWA

    const chairClair = document.querySelector('.secondSection article:first-child');
    const chairMargarita = document.querySelector('.secondSection article:nth-child(2)');

    const chairClairDiv = chairClair.querySelector('div');
    const chairMargaritaDiv = chairMargarita.querySelector('div');

    function hideBackground(e) {
        if(e.target === chairClair) {
            chairClairDiv.style.display = 'none';
        } else if (e.target === chairMargarita) {
            chairMargaritaDiv.style.display = 'none';
        }
    }

    function showBackground() {
        chairClairDiv.style.display = 'block';
        chairMargaritaDiv.style.display = 'block';
    }

    chairClair.addEventListener('mouseover', hideBackground);
    chairClair.addEventListener('mouseout', showBackground);

    chairMargarita.addEventListener('mouseover', hideBackground);
    chairMargarita.addEventListener('mouseout', showBackground);

    //-------------- KONIEC Ukrywanie napisów na zdjeciach w sekcji DWA

}


document.addEventListener('DOMContentLoaded', init);