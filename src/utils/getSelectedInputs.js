export const getSelectedInputs = () => {
    let answer;
    let answerElements = document.querySelectorAll('.answer');
    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}