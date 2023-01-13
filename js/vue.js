// console.log('Vue ok', Vue);
const dateTime = luxon.DateTime;

const app = Vue.createApp ({
    data() {
        return {
            newMess: {
                date: '10/01/2020 15:30:55',
                text: '',
                status: 'sent'
              },
            currentIndex: 0,
            data,                        
        }
    },
    computed: {
        currentContact() {
            return this.data.contacts[this.currentIndex];
        },
        currentChat() {
            return this.currentContact.messages;
        }
        
    },
    methods: {

        buildAvatarUrl(avatar){
            return `img/avatar${avatar}.jpg`
        },

        setCurrentIndex(index){
            this.currentIndex = index;
        },

        addMessages(){
                const mess = {...this.newMess};
                this.currentChat.push(mess);
                
                this.currentContact.visible = setTimeout(() => {  
                    const mess = { 
                    date: '10/01/2020 15:30:55',
                    text: 'Si capo',
                    status: 'received' };
                    this.currentChat.push(mess);
                }, 2000);
            
            this.clearInput();
        },

        addMessagesRecived(){
            
        },

        clearInput(){
            this.newMess.text = '';
        },

        getCurrentData(){
            return dateTime.now().setLocale('it').toLocaleString(dateTime.DATETIME_SHORT);
        }


    }

})

app.mount('#root');

