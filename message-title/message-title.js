const titleMsg = document.querySelector('#title');
const byClaireMsg = document.querySelector('#byClaire');


function genIntervals(numIntervals, delays, callbacks) {
    for (let n = 0; n < numIntervals; n++) {
        setTimeout(() => callbacks[n](), delays[n]);
        delays[n + 1] += delays[n];
    }
}

function stopTyping(id, msg) {
    // debugger;
    const element = document.querySelector(id);
    element.classList.add('typed');
    element.innerHTML = msg;
}

function show(id) {
    const element = document.querySelector(id);
    element.classList.remove('hidden');
}

genIntervals(3, [2000, 2000, 2000], [
    () => stopTyping('#title', 'Artists In Isolation'),
    () => show('#byClaire'),
    () => stopTyping('#byClaire', 'by Claire Marie Vogel')
]) 