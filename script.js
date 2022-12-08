let num = 0;
const count = document.querySelector('#count');
const inp_add = document.querySelector('#inp-add');
const btn_add = document.querySelector('#btn-add');
count.textContent = num;
inp_add.addEventListener('keydown', () => {
    let r = setInterval(
        () => {
            if (num <= 0) {
                count.style.color = 'red'
            }

            if (num == inp_add.value) {
                clearInterval(r)
            } if (num >= inp_add.value) {
                num--;
                count.textContent = num;
                count.style.color = 'red'
            }

            if (num <= inp_add.value) {
                count.style.color = '#25db25'

                count.textContent = num;
                num++;
            }
            count.style.fontSize = '40px'
            if (num == inp_add.value) {
                count.style.color = '#222'

            }
            if (num <= 0) {
                count.style.color = 'red'
            }
        }
        , 10)
})