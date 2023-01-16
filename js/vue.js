// console.log('Vue ok', Vue);
const dateTime = luxon.DateTime;

const app = Vue.createApp ({
    data() {
        return {
            newMess: {
                date: '10/01/2020 15:30:55',
                text: '',
                status: 'sent',
                
              },
            currentIndex: 0,
            data,   
            searchContact: '',                     
        }
    },
    computed: {
        currentContact() {
            return this.filterContact;
        },
        currentChat() {
            return this.currentContact[this.currentIndex].messages;
        },
        filterContact() {
            const filterName = this.searchContact.toLowerCase();
            return this.data.contacts.filter(name => name.name.toLowerCase().includes
            (filterName))
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
                this.createdMessages(this.newMess.text, 'sent');
                
                this.currentContact.visible = setTimeout(() => {  
                this.createdMessages('ok', 'received');
                }, 2000);
            
            this.clearInput();
        },

        createdMessages(text, status){
            const mess = { 
                date: this.getCurrentData(),
                text,
                status, };
                this.currentChat.push(mess);

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

