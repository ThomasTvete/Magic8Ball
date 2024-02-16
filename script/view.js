updateView();

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="frame">
    <div id="ball">
    <div id="answerBox">${advice[newAnswer] ?? 'Se din fremtid her'}</div>
    </div>
    <input type="text" id="userQuestion" onchange="askBall()">
    </div>
    `;
    document.getElementById('userQuestion').focus();
}