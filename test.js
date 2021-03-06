
const data = {
  name:
    "{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  spotifyURI:
    "https://open.spotify.com/track/3PFnF7lmHOxoYGXhxUkzCE?si=Kjoy_nseQ_2-OxGTRQvTag",
  profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9bQhs8EkNeOidRUWKcd9CWSEgfLgzWTa3w&usqp=CAU",
  instaLink:
    "{{wf {&quot;path&quot;:&quot;instaPage&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  messages: [
    {
      photoMessage: false,
      isArtist: false,
      text: `{{wf {&quot;path&quot;:&quot;question1&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`,
    },
    {
      photoMessage: false,
      isArtist: true,
      text: `{{wf {&quot;path&quot;:&quot;answer1&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`,
    },
    {
      photoMessage: true,
      photo:
        "https://images.squarespace-cdn.com/content/v1/55c8cee9e4b09cb562ce184f/1602098884024-59YO1FOBDVE5KA8KV05H/ke17ZwdGBToddI8pDm48kGOlHIUaguZxGOJkkmmFnPlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyOIR5M8CJR7GQzM6vt2P6sku4Lxi7H_VVxkmtUoLTejxVo3v3LvQC8Q2r8fq0rMC8/Joseph+Mallord+William+Turner+%7C+A+Storm?format=1000w",
    },

    {
      photoMessage: false,
      isArtist: false,
      text: `{{wf {&quot;path&quot;:&quot;question2&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`,
    },
    {
      photoMessage: false,
      isArtist: true,
      text: `{{wf {&quot;path&quot;:&quot;answer2&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`,
    },
    {
      photoMessage: true,
      photo:
        "https://images.squarespace-cdn.com/content/v1/55c8cee9e4b09cb562ce184f/1602098884024-59YO1FOBDVE5KA8KV05H/ke17ZwdGBToddI8pDm48kGOlHIUaguZxGOJkkmmFnPlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyOIR5M8CJR7GQzM6vt2P6sku4Lxi7H_VVxkmtUoLTejxVo3v3LvQC8Q2r8fq0rMC8/Joseph+Mallord+William+Turner+%7C+A+Storm?format=1000w",
    },

    {
      photoMessage: false,
      isArtist: false,
      text: `{{wf {&quot;path&quot;:&quot;question3&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`,
    },
    {
      photoMessage: false,
      isArtist: true,
      text: `{{wf {&quot;path&quot;:&quot;answer3&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`,
    },
    {
      photoMessage: true,
      photo:
        "https://images.squarespace-cdn.com/content/v1/55c8cee9e4b09cb562ce184f/1602098884024-59YO1FOBDVE5KA8KV05H/ke17ZwdGBToddI8pDm48kGOlHIUaguZxGOJkkmmFnPlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyOIR5M8CJR7GQzM6vt2P6sku4Lxi7H_VVxkmtUoLTejxVo3v3LvQC8Q2r8fq0rMC8/Joseph+Mallord+William+Turner+%7C+A+Storm?format=1000w",
    },

    {
      photoMessage: false,
      isArtist: false,
      text: `{{wf {&quot;path&quot;:&quot;question4&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`,
    },
    {
      photoMessage: false,
      isArtist: true,
      text: `{{wf {&quot;path&quot;:&quot;answer4&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`,
    },
    {
      photoMessage: true,
      photo:
        "https://sothebys-md.brightspotcdn.com/50/0d/249e64544ed7876bb0f71124403b/071l20022-bjq8t-01.jpg",
    },

    {
      photoMessage: false,
      isArtist: false,
      text: `{{wf {&quot;path&quot;:&quot;question5&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`,
    },
    {
      photoMessage: false,
      isArtist: true,
      text: `{{wf {&quot;path&quot;:&quot;answer5&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`,
    },
    {
      photoMessage: true,
      photo:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/rotterdam-ferry-boat-1833-joseph-mallord-william-turner.jpg",
    },
  ],
};
const datas = {
    spotifyURI: "",
    messages: [
      {
        isArtist: true,
        text: `How's isolation been for you?`,
      },
      {
        isArtist: false,
        text: `Not too bad thanks`,
      },
      {
        isArtist: true,
        text: `Have you been making lots of music? `,
      },
      {
        isArtist: false,
        text: `Oh yeah`,
      },
    ],
    name: 'James Julius'
}

const Header = ({name, initials}) => {

    function getTime(){
        let date = new Date();

        let hours = date.getHours();
        if( hours > 12 ){
            hours -= 12;
        }else if( hours === 0){
            hours = 12;
        }
        let minutes = ("00" + date.getMinutes()).substr(-2);

        return hours+':'+minutes;
    }
    
    return (
  <div className={'header'}>
    <div className={'icons'}>
      <span className={'left-icons'}>
        <div className={'clock'}>
        {getTime()}
        </div>
        <span class="iconify" data-icon="carbon:location-current" data-inline="false"></span>
      </span>
      <span className={'right-icons'}>
        <span class="iconify" data-icon="ion:cellular" data-inline="false"></span>
        &nbsp;
        <span class="iconify" data-icon="ion:wifi" data-inline="false"></span>
        &nbsp;
        <span class="iconify" data-icon="ion:battery-full" data-inline="false"></span>
      </span>
    </div>
    <div className={'messenger-header'}>
        <span className={'back-arrow'}>
            <span class="iconify" data-icon="ion-ios-arrow-back" data-inline="false"></span>
        </span>
        <span className={"user-detail"}>
            <div className={"user-icon"}>
                <img class="profile-pic" src={profilePic} alt={"A picture of " + name}/>
            </div>
            <p className={"user-name"}>
                {name}
                <span class="iconify right-arrow" data-icon="ic:outline-arrow-forward-ios" data-inline="false"></span>
            </p>
         </span>
    </div>
  </div>
)};

const Message = ({ isArtist, text, photoMessage, photo }) => {
  let className = (isArtist ? "yours" : "mine");
  if (photoMessage) {
    return (
      <div className={"messages animated slideInUp fast " + className}>
        <p className={"message"}>
          <img src={photo} alt="An photo illustrating the artists response"/>
        </p>
      </div>
    )
  } else { 
    return (
      <div className={"messages animated slideInUp fast " + className}>
        <p className={"message"}>
          {text}
        </p>
      </div>
    )
  }
};


const MessageHistory = ({ messages }) => (
  <div className={"chat"}>
    {messages.map((msg, idx) => (<Message key={idx} {...msg} />))}
  </div>
);

function SpotifyBar({
  spotifyURI,
}) {

  function makeSpotifyLink(input) {
    if (input.includes('/track/')) {
    input = input.replace('/track/', '/embed/track/')
    }
    
    if (input.includes('/album/')) {
      input = input.replace("/album/", "/embed/album/");
    }

    for (let n = 2; n < input.length; n++) {
      let j = input[n - 2];
      let k = input[n - 1];
      let l = input[n];
      if (j === '?' && k === 's' && l === 'i') {
        input = input.substring(0, n - 2);
      }
    }
    return input;
  }

  return (
    <iframe
      title="spotify-player"
      src={makeSpotifyLink(spotifyURI)}
      width="100%"
      height="100"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
}

const CollapsedInputFooter = ({spotifyURI}) => (
  <div className={'input-view'}>
    <SpotifyBar spotifyURI={spotifyURI}/>
  </div>
);

const Phone = () => {
  function initialiseName() {
    let splitName = data.name.split(' ');
    return splitName[0][0].toUpperCase() + splitName[1][0].toUpperCase();
  }

  return (
  <div class="phone-image">
    <div
        className={'window'}
    >
        <Header name={data.name} initials={initialiseName()}/>
        <MessageHistory messages={data.messages}/>
        <CollapsedInputFooter spotifyURI={data.spotifyURI}/>
    </div>
  </div>
)}

const domContainer = document.querySelector('#react-component-container');

ReactDOM.render(React.createElement(Phone), domContainer);