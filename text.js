const data = {
  name:
    "{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  spotifyURI:
    "{{wf {&quot;path&quot;:&quot;spotify-link&quot;,&quot;type&quot;:&quot;Link&quot;} }}",
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
        "{{wf {&quot;path&quot;:&quot;profilephoto1&quot;,&quot;type&quot;:&quot;ImageRef&quot;} }}",
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
        "{{wf {&quot;path&quot;:&quot;profilephoto2&quot;,&quot;type&quot;:&quot;ImageRef&quot;} }}",
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
        "{{wf {&quot;path&quot;:&quot;profilephoto3&quot;,&quot;type&quot;:&quot;ImageRef&quot;} }}",
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
        "{{wf {&quot;path&quot;:&quot;profilephoto4&quot;,&quot;type&quot;:&quot;ImageRef&quot;} }}",
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
        "{{wf {&quot;path&quot;:&quot;profilephoto5&quot;,&quot;type&quot;:&quot;ImageRef&quot;} }}",
    },
  ],
};

