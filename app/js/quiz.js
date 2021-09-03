let quizContent = {
    "Автоматизированный маркетинг": ["Контекстная реклама",
        "Yandex Dzen", "Таргетированная реклама", "CRM", "Ведение социальных сетей",
        "Управление репутацией в интернете", "Продвижение мобильных приложений"
    ],

    "Веб-разработка": ["Создание сайтов", "Веб-дизайн", "Брендинг",
        "Создание мобильных  приложений", "Фирменный стиль", "Нейминг"
    ],

    "Дизайн": ["Создание сайтов", "Веб-дизайн", "Брендинг", "Разработка логотипов",
        "Создание мобильных  приложений", "Фирменный стиль", "Нейминг"
    ],

    "Обучение": ["Консультация с таргетологом", "Консультация с веб-разработчиком", "Консультация с дизайнером",
        "Консультация по созданию личного бренда", "Консультация с владельцами диджитал агентства"
    ],

    "Комплексные решения": ["Complex Light (сайт + seo + ведение инстаграма )", "Complex Medium (сайт + seo + контекст + ведение инстаграма + таргет)",
        "Complex Pro (брендинг + фирм стиль + сайт+контекст + сео + таргет + соцсети + емаил маркетинг)"
    ],
}

class Quiz{
    constructor(element){
        this.container = element;

        this.direction = true;
        this.directionTitle = '';
        this.selectedQuiz = {}

        this.start();
    }

    start(){
        this.container.querySelectorAll(".quiz__radio-input").forEach(item => {
            item.addEventListener("click", ()=>{
                this.container.querySelector('.quiz__btns-next').classList.remove('disable');
            })
        });

        this.container.querySelector('.quiz__btns-next').addEventListener('click', ()=>{
            this.nextBtn();
            
            if(this.direction) {
                this.container.querySelector('.quiz-step__btn').classList.remove('add-none');
            }
        });

        this.container.querySelector('.quiz__btns-back').addEventListener('click', ()=>{
            this.prevBtn();
            this.container.querySelector('.quiz-step__form').classList.add('add-none');

            if(this.direction && Object.keys(this.selectedQuiz).length > 0) {
                this.container.querySelector('.quiz-step__btn').classList.remove('add-none');
            }
        });

        this.container.querySelector('.quiz-step__btn').addEventListener('click', ()=>{
            this.container.querySelector('.quiz-step__radio-list').classList.add('add-none');
            this.container.querySelector('.quiz-step__checkbox-list').classList.add('add-none');

            this.container.querySelector('.quiz-step__form').classList.remove('add-none');

            //FIXME:  This variable (selectedQuiz) must be sent to the server
            console.log(this.selectedQuiz) 
            
            let data = '';
            for (let key in this.selectedQuiz) {
                
                data += key + ":\t";
                this.selectedQuiz[key].forEach(item => {
                    data += item+", ";
                });

                data += "|" + "\n";
            }
            console.log(data);

            this.container.querySelector('#user-select_quiz').value = data;
            //FIXME:  This variable (selectedQuiz) must be sent to the server
            
        });
    }

    nextBtn(){
        this.container.querySelector('.quiz__btns-back').classList.remove('disable'); 
        this.container.querySelector('.quiz__btns-next').classList.toggle('disable');

        if(!this.direction) {
            this.container.querySelectorAll(".quiz__radio").forEach(item => {
                if(item.querySelector('input').checked){
                    item.classList.add('add-none');
                }
            });

            let lsContent = [];
            this.selectedQuiz[this.directionTitle] = lsContent
            this.container.querySelectorAll(".quiz__checkbox").forEach(item => {
                if(item.querySelector('input').checked){
                    lsContent.push(item.querySelector('label').innerText);
                }

            });
            

        }
        this.container.querySelector('.quiz-step__radio-list').classList.toggle('add-none');
        this.container.querySelector('.quiz-step__checkbox-list').classList.toggle('add-none');
        if(this.direction){
            this.prepareСontent();
        }
        this.direction = !this.direction;
        
    }
    prevBtn(){
        if(Object.keys(this.selectedQuiz).length <= 0){
            this.container.querySelector('.quiz__btns-back').classList.add('disable'); 
            this.container.querySelector('.quiz-step__btn').classList.add('add-none'); 
        }



        // this.container.querySelector('.quiz__btns-next').classList.toggle('disable');

        if(!this.direction) {
            
            let last = Object.keys(this.selectedQuiz)[Object.keys(this.selectedQuiz).length-1];
            this.container.querySelectorAll(".quiz__radio").forEach(item => {
                if(item.querySelector('input').checked){
                    this.container.querySelector('.quiz__btns-next').classList.remove('disable'); 
                }
            });

            
        }
        this.container.querySelector('.quiz-step__radio-list').classList.toggle('add-none');
        this.container.querySelector('.quiz-step__checkbox-list').classList.toggle('add-none');
        if(this.direction){
            this.preparePrevСontent();

            let last = Object.keys(this.selectedQuiz)[Object.keys(this.selectedQuiz).length-1];
            this.container.querySelectorAll(".quiz__radio").forEach(item => {
                if(item.querySelector('input').value == last){
                    item.classList.remove('add-none');
                }
            });

            
            delete this.selectedQuiz[last];
            

        }
        this.direction = !this.direction;
        
    }

    prepareСontent(){
        this.container.querySelector('.quiz-step__btn').classList.add('add-none');

        this.container.querySelectorAll(".quiz__radio-input").forEach(item => {
            if(item.checked){
                let content = '';
                for(let i = 0; i < quizContent[item.value].length; i++){
                    content += "<div class='quiz__checkbox'> \
					                <input type='checkbox' id='quiz-checkbox-"+(i+1)+"'> \
					                <label for='quiz-checkbox-"+(i+1)+"'>"+quizContent[item.value][i]+"</label> \
				                </div>"
                }
                this.container.querySelector('.quiz-step__checkbox-list').innerHTML = content;
                this.directionTitle = item.value;
            }
        });

        this.container.querySelectorAll('.quiz__checkbox').forEach(item => {
            item.addEventListener("click", ()=>{
                this.container.querySelector('.quiz__btns-next').classList.add('disable'); 
                
                this.container.querySelectorAll('.quiz__checkbox').forEach(item => {
                    if(item.querySelector('input').checked){
                        this.container.querySelector('.quiz__btns-next').classList.remove('disable'); 
                    }
                })
            });
        });

       
    }
    preparePrevСontent(){
        this.container.querySelector('.quiz-step__btn').classList.add('add-none');

        let last = Object.keys(this.selectedQuiz)[Object.keys(this.selectedQuiz).length-1];

        this.container.querySelectorAll(".quiz__radio-input").forEach(item => {
            if(item.checked){
                let content = '';
                for(let i = 0; i < quizContent[last].length; i++){
                    content += "<div class='quiz__checkbox'> \
					                <input type='checkbox' id='quiz-checkbox-"+(i+1)+"'> \
					                <label for='quiz-checkbox-"+(i+1)+"'>"+quizContent[last][i]+"</label> \
				                </div>"
                }
                this.container.querySelector('.quiz-step__checkbox-list').innerHTML = content;
                this.directionTitle = item.value;
            }
        });

        this.container.querySelectorAll('.quiz__checkbox').forEach(item => {
            item.addEventListener("click", ()=>{
                this.container.querySelector('.quiz__btns-next').classList.add('disable'); 
                
                this.container.querySelectorAll('.quiz__checkbox').forEach(item => {
                    if(item.querySelector('input').checked){
                        this.container.querySelector('.quiz__btns-next').classList.remove('disable'); 
                    }
                })
            });
        });
        


       
    }


}





let quiz = document.querySelectorAll(".quiz");
quiz.forEach(item => {
    new Quiz(item);
})
