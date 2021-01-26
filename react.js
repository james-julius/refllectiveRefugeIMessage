const data = {
    spotifyURI: "https://open.spotify.com/track/3PFnF7lmHOxoYGXhxUkzCE?si=Kjoy_nseQ_2-OxGTRQvTag",
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
                {initials}
            </div>
            <p className={"user-name"}>
                {name}
                <span class="iconify right-arrow" data-icon="ic:outline-arrow-forward-ios" data-inline="false"></span>
            </p>
         </span>
    </div>
  </div>
)};

const Message = ({ isArtist, text }) => {
  let className = (isArtist ? "yours" : "mine");

  return (
    <div className={[styles[className], styles["messages"], "animated", "slideInUp", "fast"].join(' ')}>
      <p className={styles["message"]}>
        {text}
      </p>
    </div>
  )
};


const MessageHistory = ({ messages }) => (
  <div className={"chat"}>
    {messages.map((msg, idx) => (<Message key={idx} {...msg} />))}
  </div>
);

const CollapsedInputFooter = ({spotifyURI}) => (
  <div className={'input-view'}>
    <SpotifyBar spotifyURI={spotifyURI}/>
  </div>
);

const PhoneWindow = () => {
  function initialiseName() {
    let splitName = data.name.split(' ');
    return splitName[0][0].toUpperCase() + splitName[1][0].toUpperCase();
  }

  return (
  <div
    className={'window'}
  >
      <Header name={data.name} initials={initialiseName()}/>
      <MessageHistory messages={data.messages}/>
      <CollapsedInputFooter spotifyURI={data.spotifyURI}/>
  </div>
)}

const domContainer = document.querySelector('#react-component-container');

ReactDOM.render(e(PhoneWindow), domContainer);
