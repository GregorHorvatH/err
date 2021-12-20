import reactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { BrowserRouter } from 'react-router-dom';

toastr.options = {
	closeButton: false,
	debug: false,
	newestOnTop: false,
	progressBar: false,
	positionClass: 'toast-top-right',
	preventDuplicates: false,
	onclick: null,
	showDuration: '300',
	hideDuration: '1000',
	timeOut: '5000',
	extendedTimeOut: '1000',
	showEasing: 'swing',
	hideEasing: 'linear',
	showMethod: 'fadeIn',
	hideMethod: 'fadeOut',
};

reactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,

	document.getElementById('root')
);
