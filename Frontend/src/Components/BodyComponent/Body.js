import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage';
import NotificationPage from './Notification/NotificationPage';
import EraktkoshFAQPage from './EraktkoshFAQ/EraktkoshFAQPage';
import GalleryPage from './Gallery/GalleryPage';
import VideoGalleryPage from './VideoGallery/VideoGalleryPage';
import ContactUsPage from './ContactUs/ContactUsPage';
import StockAvailabilityPage from './StockAvailability/StockAvailabilityPage';
import NearestBloodBankPage from './NearestBloodBank/NearestBloodBankPage';
import DonationCampPage from './DonationCamp/DonationCampPage';
import DonationRequestPage from './DonationRequest/DonationRequestPage';
import DonorLoginPage from './DonorLogin/DonorLoginPage';
import UserProfile from './Profile/UserProfile';
import OtherUsersProfile from './Profile/OtherUsersProfile';
import RegisterDonerPage from './RegisterDoner/RegisterDonerPage';
import CreateCampPage from './CreateCamp/CreateCampPage';
import UserAuthenticationPage from './UserActivation/UserAuthenticationPage';
import ForgotPasswordPage from './ForgotPassword/ForgotPasswordPage';
import UserVerificationPage from './UserActivation/UserVerificationPage';
import ResetPasswordPage from './ForgotPassword/ResetPasswordPage';
import NotFound from '../Utilities/NotFound';
import AddYourBloodBankPage from './AddYourBloodBank/AddYourBloodBankPage';
import FundraisingPage from './Fundraising/FundraisingPage';
import PaymentPage from './Payment/PaymentPage';
import PaymentStatus from './Payment/PaymentStatus';
import TransactionDetails from './Payment/TransactionDetails';

function Body() {

    const userAuthentication = useSelector(State => State.userAuthentication);
    const { isLoggedIn } = userAuthentication;

    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/notification" component={NotificationPage} exact />
            <Route path="/eraktkoshFAQs" component={EraktkoshFAQPage} exact />
            <Route path="/gallery" component={GalleryPage} exact />
            <Route path="/videoGallery" component={VideoGalleryPage} exact />
            <Route path="/contact" component={ContactUsPage} exact />

            <Route path="/bloodAvailability" component={StockAvailabilityPage} exact />
            <Route path="/directory" component={NearestBloodBankPage} exact />

            <Route path="/donationCamps" component={DonationCampPage} exact />
            <Route path="/appointment" component={DonationRequestPage} exact />
            <Route path="/login" component={isLoggedIn ? NotFound : DonorLoginPage} exact />
            <Route path="/profile" component={isLoggedIn ? UserProfile : NotFound} exact />
            <Route path="/find_profile" component={OtherUsersProfile} exact />
            <Route path="/register" component={isLoggedIn ? NotFound : RegisterDonerPage} exact />
            <Route path="/create_camp" component={isLoggedIn ? CreateCampPage : NotFound} exact />
            <Route path="/user/activate" component={isLoggedIn ? NotFound : UserAuthenticationPage} exact />
            <Route path="/forgot_user_password" component={isLoggedIn ? NotFound : ForgotPasswordPage} exact />
            <Route path="/user_verification" component={isLoggedIn ? NotFound : UserVerificationPage} exact />
            <Route path="/reset_user_password" component={isLoggedIn ? NotFound : ResetPasswordPage} exact />

            <Route path="/addBloodBank" component={AddYourBloodBankPage} exact />

            <Route path="/fundraising" component={FundraisingPage} exact />
            <Route path="/payment" component={PaymentPage} exact />
            <Route path="/payment_status/:OrderID" component={PaymentStatus} exact />
            <Route path="/transaction_details" component={TransactionDetails} exact />

        </Switch>
    );

};

export default Body;
