import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on(
  'timeupdate',
  throttle(function (timeupdate) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(timeupdate.seconds)
    );
  }, 1000)
);

if (JSON.parse(localStorage.getItem('videoplayer-current-time'))) {
  player.setCurrentTime(
    JSON.parse(localStorage.getItem('videoplayer-current-time'))
  );
}
