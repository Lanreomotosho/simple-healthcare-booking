import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  { id: 1, text: 'Stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'Book Appointment', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'All Appointment', path: 'add-job', icon: <FaWpforms /> },
  { id: 4, text: 'My Profile', path: 'profile', icon: <ImProfile /> },
];

export default links;
