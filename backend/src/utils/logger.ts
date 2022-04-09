import patch from 'console-stamp';

patch(console, {
  format: ':label :date(yyyy/mm/dd HH:MM:ss.l)',
});
