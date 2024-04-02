// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa,
// il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul
// pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo,
// che quindi viene aggiunto alla lista dei todo esistenti.


const { createApp } = Vue;

createApp({
    data() {
        return {
            textInput: '', 
            listAction: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Spegnere il sugo',
                    done: false
                },
                {
                    text: 'Scendere il cane',
                    done: false
                },
                {
                    text: 'Fare benzina',
                    done: true
                },
                {
                    text: 'Prendere la farina',
                    done: false
                },
                {
                    text: 'Mangiare il sushi',
                    done: true
                },
            ],
        };
    },
    methods: {
        eliminateItems(){
            this.listAction.splice(this.index, 1);
        },
        
        pushNewAction(){
            const newTask = {
                text: this.textInput,
                done: false
            };
            this.listAction.unshift(newTask);
            this.textInput = '';
        }
        
        
        
    },
    mounted() {
        console.log(this.listAction);
       
    }
}).mount('#app');