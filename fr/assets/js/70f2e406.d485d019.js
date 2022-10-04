"use strict";(self.webpackChunknewdoc=self.webpackChunknewdoc||[]).push([[21],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"Run with Docker",sidebar_position:1},o="Automatic Speech Recognition",i={unversionedId:"developpers/apis/ASR/dockerrun",id:"developpers/apis/ASR/dockerrun",title:"Automatic Speech Recognition",description:"LinTO-platform-stt can either be used as a standalone transcription service or deployed within a micro-services infrastructure using a message broker connector.",source:"@site/docs/developpers/apis/ASR/dockerrun.md",sourceDirName:"developpers/apis/ASR",slug:"/developpers/apis/ASR/dockerrun",permalink:"/fr/docs/developpers/apis/ASR/dockerrun",draft:!1,editUrl:"https://github.com/linto-ai/documentation-website/tree/source/docs/developpers/apis/ASR/dockerrun.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Run with Docker",sidebar_position:1},sidebar:"devSidebar",previous:{title:"LinTO Platform STT",permalink:"/fr/docs/developpers/apis/ASR/"},next:{title:"Models download",permalink:"/fr/docs/developpers/apis/ASR/models"}},s={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Model",id:"model",level:3},{value:"Docker",id:"docker",level:3},{value:"(micro-service) Service broker and shared folder",id:"micro-service-service-broker-and-shared-folder",level:3},{value:"Deploy linto-platform-stt",id:"deploy-linto-platform-stt",level:2},{value:"Serving mode",id:"serving-mode",level:3},{value:"HTTP Server",id:"http-server",level:3},{value:"Micro-service &amp; task broker",id:"micro-service--task-broker",level:3},{value:"Websocket Server",id:"websocket-server",level:3},{value:"Usages",id:"usages",level:2},{value:"HTTP API",id:"http-api",level:3},{value:"/healthcheck",id:"healthcheck",level:4},{value:"/transcribe",id:"transcribe",level:4},{value:"/streaming",id:"streaming",level:4},{value:"/docs",id:"docs",level:4},{value:"Through the message broker",id:"through-the-message-broker",level:3},{value:"Return format",id:"return-format",level:4},{value:"Test",id:"test",level:2},{value:"Curl",id:"curl",level:3},{value:"License",id:"license",level:2},{value:"Acknowlegment.",id:"acknowlegment",level:2}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"automatic-speech-recognition"},"Automatic Speech Recognition"),(0,r.kt)("h1",{id:"linto-platform-stt"},"LINTO-PLATFORM-STT"),(0,r.kt)("p",null,"LinTO-platform-stt can either be used as a standalone transcription service or deployed within a micro-services infrastructure using a message broker connector."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("h3",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,"To run the transcription models you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At least 7Go of disk space to build the docker image."),(0,r.kt)("li",{parentName:"ul"},"Up to 7GB of RAM depending on the model used."),(0,r.kt)("li",{parentName:"ul"},"One CPU per worker. Inference time scales on CPU performances. ")),(0,r.kt)("h3",{id:"model"},"Model"),(0,r.kt)("p",null,"LinTO-Platform-STT accepts two kinds of models:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LinTO Acoustic and Languages models."),(0,r.kt)("li",{parentName:"ul"},"Vosk models.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"models"},"ASR Models")),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"The transcription service requires docker up and running."),(0,r.kt)("h3",{id:"micro-service-service-broker-and-shared-folder"},"(micro-service) Service broker and shared folder"),(0,r.kt)("p",null,"The STT only entry point in task mode are tasks posted on a message broker. Supported message broker are RabbitMQ, Redis, Amazon SQS.\nOn addition, as to prevent large audio from transiting through the message broker, STT-Worker use a shared storage folder (SHARED_FOLDER)."),(0,r.kt)("h2",{id:"deploy-linto-platform-stt"},"Deploy linto-platform-stt"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1- First step is to build or pull the image:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/linto-ai/linto-platform-stt.git\ncd linto-platform-stt\ndocker build . -t linto-platform-stt:latest\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull lintoai/linto-platform-stt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2- Download the models")),(0,r.kt)("p",null,"Have the acoustic and language model ready at AM_PATH and LM_PATH if you are using LinTO models. If you are using a Vosk model, have it ready at MODEL."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3- Fill the .env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp .envdefault .env\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,r.kt)("th",{parentName:"tr",align:null},"EXEMPLE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SERVING_MODE"),(0,r.kt)("td",{parentName:"tr",align:null},"STT serving mode see ",(0,r.kt)("a",{parentName:"td",href:"#serving-mode"},"Serving mode")),(0,r.kt)("td",{parentName:"tr",align:null},"http","|","task","|","websocket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MODEL_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of STT model used"),(0,r.kt)("td",{parentName:"tr",align:null},"lin","|","vosk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ENABLE_STREAMING"),(0,r.kt)("td",{parentName:"tr",align:null},"Using http serving mode, enable the /streaming websocket route"),(0,r.kt)("td",{parentName:"tr",align:null},"true","|","false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SERVICE_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"Using the task mode, set the queue's name for task processing"),(0,r.kt)("td",{parentName:"tr",align:null},"my-stt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SERVICE_BROKER"),(0,r.kt)("td",{parentName:"tr",align:null},"Using the task mode, URL of the message broker"),(0,r.kt)("td",{parentName:"tr",align:null},"redis://my-broker:6379")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BROKER_PASS"),(0,r.kt)("td",{parentName:"tr",align:null},"Using the task mode, broker password"),(0,r.kt)("td",{parentName:"tr",align:null},"my-password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STREAMING_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Using the websocket mode, the listening port for ingoing WS connexions."),(0,r.kt)("td",{parentName:"tr",align:null},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CONCURRENCY"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of parallel requests"),(0,r.kt)("td",{parentName:"tr",align:null},">1")))),(0,r.kt)("h3",{id:"serving-mode"},"Serving mode"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving Modes",src:n(3424).Z,width:"601",height:"341"})),(0,r.kt)("p",null,"STT can be used three different ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Through an ",(0,r.kt)("a",{parentName:"li",href:"#http-server"},"HTTP API")," using the ",(0,r.kt)("strong",{parentName:"li"},"http"),"'s mode."),(0,r.kt)("li",{parentName:"ul"},"Through a ",(0,r.kt)("a",{parentName:"li",href:"#micro-service-within-linto-platform-stack"},"message broker")," using the ",(0,r.kt)("strong",{parentName:"li"},"task"),"'s mode."),(0,r.kt)("li",{parentName:"ul"},"Through a ",(0,r.kt)("a",{parentName:"li",href:"#websocket-server"},"websocket server")," ",(0,r.kt)("strong",{parentName:"li"},"websocket"),"'s mode.")),(0,r.kt)("p",null,"Mode is specified using the .env value or environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVING_MODE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SERVING_MODE=http\n")),(0,r.kt)("h3",{id:"http-server"},"HTTP Server"),(0,r.kt)("p",null,"The HTTP serving mode deploys an HTTP server and a swagger-ui to allow transcription request on a dedicated route."),(0,r.kt)("p",null,"The SERVING_MODE value in the .env should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"http"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm \\\n-p HOST_SERVING_PORT:80 \\\n-v AM_PATH:/opt/AM \\\n-v LM_PATH:/opt/LM \\\n--env-file .env \\\nlinto-platform-stt:latest\n")),(0,r.kt)("p",null,"This will run a container providing an ",(0,r.kt)("a",{parentName:"p",href:"#http-api"},"HTTP API")," binded on the host port ",(0,r.kt)("inlineCode",{parentName:"p"},"HOST_SERVING_PORT"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,r.kt)("th",{parentName:"tr",align:null},"EXEMPLE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HOST_SERVING_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Host serving port"),(0,r.kt)("td",{parentName:"tr",align:null},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AM_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the acoustic model on the host machine mounted to /opt/AM"),(0,r.kt)("td",{parentName:"tr",align:null},"/my/path/to/models/AM_fr-FR_v2.2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LM_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the language model on the host machine mounted to /opt/LM"),(0,r.kt)("td",{parentName:"tr",align:null},"/my/path/to/models/fr-FR_big-v2.2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MODEL_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the model (using MODEL_TYPE=vosk) mounted to /opt/model"),(0,r.kt)("td",{parentName:"tr",align:null},"/my/path/to/models/vosk-model")))),(0,r.kt)("h3",{id:"micro-service--task-broker"},"Micro-service & task broker"),(0,r.kt)("p",null,"The HTTP serving mode connect a celery worker to a message broker."),(0,r.kt)("p",null,"The SERVING_MODE value in the .env should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"task"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"LinTO-platform-stt in task mode is not intended to be launch manually.\nHowever, if you intent to connect it to your custom message's broker here are the parameters:")),(0,r.kt)("p",null,"You need a message broker up and running at MY_SERVICE_BROKER."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm \\\n-v AM_PATH:/opt/models/AM \\\n-v LM_PATH:/opt/models/LM \\\n-v SHARED_AUDIO_FOLDER:/opt/audio \\\n--env-file .env \\\nlinto-platform-stt:latest\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,r.kt)("th",{parentName:"tr",align:null},"EXEMPLE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AM_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the acoustic model on the host machine mounted to /opt/AM"),(0,r.kt)("td",{parentName:"tr",align:null},"/my/path/to/models/AM_fr-FR_v2.2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LM_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the language model on the host machine mounted to /opt/LM"),(0,r.kt)("td",{parentName:"tr",align:null},"/my/path/to/models/fr-FR_big-v2.2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MODEL_PATH"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the model (using MODEL_TYPE=vosk) mounted to /opt/model"),(0,r.kt)("td",{parentName:"tr",align:null},"/my/path/to/models/vosk-model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHARED_AUDIO_FOLDER"),(0,r.kt)("td",{parentName:"tr",align:null},"Shared audio folder mounted to /opt/audio"),(0,r.kt)("td",{parentName:"tr",align:null},"/my/path/to/models/vosk-model")))),(0,r.kt)("h3",{id:"websocket-server"},"Websocket Server"),(0,r.kt)("p",null,"Websocket server's mode deploy a streaming transcription service only."),(0,r.kt)("p",null,"The SERVING_MODE value in the .env should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"websocket"),"."),(0,r.kt)("p",null,"Usage is the same as the ",(0,r.kt)("a",{parentName:"p",href:"#/streaming"},"http streaming API")),(0,r.kt)("h2",{id:"usages"},"Usages"),(0,r.kt)("h3",{id:"http-api"},"HTTP API"),(0,r.kt)("h4",{id:"healthcheck"},"/healthcheck"),(0,r.kt)("p",null,"Returns the state of the API"),(0,r.kt)("p",null,"Method: GET"),(0,r.kt)("p",null,'Returns "1" if healthcheck passes.'),(0,r.kt)("h4",{id:"transcribe"},"/transcribe"),(0,r.kt)("p",null,"Transcription API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Method: POST"),(0,r.kt)("li",{parentName:"ul"},"Response content: text/plain or application/json"),(0,r.kt)("li",{parentName:"ul"},"File: Wave file 16b 16Khz")),(0,r.kt)("p",null,'Return the transcripted text using "text/plain" or a json object when using "application/json" structure as followed:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "text" : "This is the transcription",\n  "words" : [\n    {"word":"This", "start": 0.123, "end": 0.453, "conf": 0.9},\n    ...\n  ]\n  "confidence-score": 0.879\n}\n')),(0,r.kt)("h4",{id:"streaming"},"/streaming"),(0,r.kt)("p",null,"The /streaming route is accessible if the ENABLE_STREAMING environment variable is set to true."),(0,r.kt)("p",null,"The route accepts websocket connexions. Exchanges are structured as followed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Client send a json ",(0,r.kt)("inlineCode",{parentName:"li"},'{"config": {"sample_rate":16000}}'),"."),(0,r.kt)("li",{parentName:"ol"},'Client send audio chunk (go to 3- ) or {"eof" : 1} (go to 5-).'),(0,r.kt)("li",{parentName:"ol"},"Server send either a partial result ",(0,r.kt)("inlineCode",{parentName:"li"},'{"partial" : "this is a "}')," or a final result ",(0,r.kt)("inlineCode",{parentName:"li"},'{"text": "this is a transcription"}'),"."),(0,r.kt)("li",{parentName:"ol"},"Back to 2-"),(0,r.kt)("li",{parentName:"ol"},"Server send a final result and close the connexion.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Connexion will be closed and the worker will be freed if no chunk are received for 10s. ")),(0,r.kt)("h4",{id:"docs"},"/docs"),(0,r.kt)("p",null,"The /docs route offers a OpenAPI/swagger interface."),(0,r.kt)("h3",{id:"through-the-message-broker"},"Through the message broker"),(0,r.kt)("p",null,"STT-Worker accepts requests with the following arguments:\n",(0,r.kt)("inlineCode",{parentName:"p"},"file_path: str, with_metadata: bool")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"file_path"),": Is the location of the file within the shared_folder. /.../SHARED_FOLDER/{file_path}"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"with_metadata"),": If True, words timestamps and confidence will be computed and returned. If false, the fields will be empty.")),(0,r.kt)("h4",{id:"return-format"},"Return format"),(0,r.kt)("p",null,"On a successfull transcription the returned object is a json object structured as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "text" : "this is the transcription as text",\n    "words": [\n        {\n        "word" : "this",\n        "start": 0.0,\n        "end": 0.124,\n        "conf": 1.0\n        },\n        ...\n    ],\n    "confidence-score": ""\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"text")," field contains the raw transcription."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"word")," field contains each word with their timestamp and individual confidence. (Empty if with_metadata=False)"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"confidence")," field contains the overall confidence for the transcription. (0.0 if with_metadata=False)")),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("h3",{id:"curl"},"Curl"),(0,r.kt)("p",null,"You can test your http API using curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://YOUR_SERVICE:YOUR_PORT/transcribe" -H  "accept: application/json" -H  "Content-Type: multipart/form-data" -F "file=@YOUR_FILE;type=audio/x-wav"\n')),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"This project is developped under the AGPLv3 License (see LICENSE)."),(0,r.kt)("h2",{id:"acknowlegment"},"Acknowlegment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://alphacephei.com/vosk/"},"Vosk, speech recognition toolkit"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kaldi-asr/kaldi"},"Kaldi Speech Recognition Toolkit"))))}u.isMDXComponent=!0},3424:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/platform-stt-84248e87281aa9f529cbe113f76b5f53.png"}}]);