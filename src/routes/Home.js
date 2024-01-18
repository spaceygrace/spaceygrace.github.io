import Countdown from "react-countdown";

export default function Home() {


  // in here do i use the dom to get the countdown elements out?

  return (
    <div class="wrapper offset">

      <div class="background gaze" />

      {/* put into container? */}

      <div class="box flexcol">

        {/* this makes a span ... but i cant style or name it here deirectly it gers auto generated....... */}
        <Countdown date={'08 Jun 2024 00:14:00 GMT -4'}/>

        <div class="flexrow">
          <p>DDD</p>
          <p>HH</p>
          <p>MM</p>
          <p>SS</p>
        </div>

        <h2>June 8th. 2024</h2>

        <button id="rsvp"><a href="rsvp.html"/>RSVP</button>
      </div>
    </div>
  );
}
