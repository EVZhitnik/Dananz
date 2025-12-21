import Logo from '@/components/Logo';
import './Footer.scss';
import Button from '@/components/Button';
import Socials from '@/components/Socials';

export default () => {
  const socialsData = [
    {
      label: 'Facebook',
      iconName: 'facebook',
    },
    {
      label: 'Instagram',
      iconName: 'instagram',
    },
    {
      label: 'Tiktok',
      iconName: 'tiktok',
    },
    {
      label: 'Youtube',
      iconName: 'youtube',
    },
  ];

  return (
    <footer className='footer'>
      <div className="footer__inner container">
        <div className="footer__info">
          <Logo className="footer__logo" />
          <p className="footer__title h2">
            One of the best furniture agency.
          </p>
        </div>
        <div className="footer__body">
          <form className="footer__feedback-form" action="">
            <p className="footer__feedback-form-text">
              Enter  your email to get the laterst news
            </p>
            <div className="footer__feedback-form-body">
              <label className="footer__feedback-form-label visually-hidden" htmlFor="email">Email</label>
              <input
                name="email" 
                className="footer__feedback-form-control" 
                id="email"
                type="email" 
                placeholder="example@gmail.com"
                autocomplete="email"
              />
              <Button 
                className="footer__feedback-form-button"
                mode="footer"
                type="submit"
                isLabelHidden
                iconName="arrow-submit"
              />   
            </div>
          </form>
          <div className="footer__actions">
            <p className="footer__follow">Follow us On</p>
            <Socials className="footer__socials" links={socialsData} />
          </div>
        </div>
      </div>
    </footer>
  );
};