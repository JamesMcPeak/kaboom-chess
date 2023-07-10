const text = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, caption, span, a, blockquote, dd');

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Atomic')) {
        text[i].innerHTML = text[i].innerHTML.replace('Atomic', 'Kaboom Chess');
    } else if (text[i].innerHTML.includes('atomic')) {
        text[i].innerHTML = text[i].innerHTML.replace('atomic', 'kaboom chess');
    } else if (text[i].innerHTML.includes('ATOMIC')) {
        text[i].innerHTML = text[i].innerHTML.replace('ATOMIC', 'KABOOM CHESS');
    }
}