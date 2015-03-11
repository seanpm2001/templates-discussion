var apikey = 'f87180cfae6a286130c6e3de098a3e88';
var headers = {'headers':
   {
     'apikey': apikey
   }
};

var xcontrols = {

 host: 'https://beta.ldcvia.com/1.0',
 db: 'dev-londc-com-demos-discussion-nsf',
 apikey: apikey,

 appVersion : '0.1',

 menuOptions : [

   { label : 'All Documents', url : 'index.html', icon : 'fa-dashboard' }

 ],

 footerOptions : [
   { label : 'All Documents', url : '/index.html', icon : 'fa-dashboard'}
 ],

 modelName : 'Topic',

 listurl : "https://beta.ldcvia.com/1.0/collections/dev-londc-com-demos-discussion-nsf/MainTopic",
 docurl : "https://beta.ldcvia.com/1.0/document/dev-londc-com-demos-discussion-nsf/MainTopic/:id",

 fields : [
   { label : 'Subject' , field: 'Subject', required: true},
   { label : 'Created By' , field: 'From', type: 'notesname', edit: false },
   { label : 'Category' , field: 'Categories', type: 'implodelist', read: true, edit: false },
   { label : 'Category' , field: 'Categories', type: 'select-multiple', options: ['Design', 'Development', 'Manufacturing', 'Sales'], read: false, edit: true },
   { label : 'Date Created' , field: '__created', type: 'date', edit: false },
   { label : 'Body' , field: 'Body__parsed', type: 'html', read: true, edit: false},
   { label : 'Body' , field: 'Body__parsed', type: 'html', read: false, edit: true},
   { label : 'Files', field: '_files', type: 'files', read: true, edit: false}
 ]

}
