
import Image from 'next/image';
import styles from './page.module.css';
import Login from '@/components/auth/Login';
export default function Home() {
  
  return (
    <div className="authentication-wrapper authentication-cover authentication-bg">
      <div className="authentication-inner row">
        <div className="d-none d-lg-flex col-lg-7 p-0">
          <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
            <img
              src="/assets/img/login/c2.png"
              className="img-fluid my-5 auth-illustration"
            />
            <img
              src="/assets/img/illustrations/bg-shape-image-light.png"
              alt="auth-login-cover"
              className="platform-bg"
              data-app-light-img="illustrations/bg-shape-image-light.png"
              data-app-dark-img="illustrations/bg-shape-image-dark.png"
            />
          </div>
        </div>

        <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
          <div className="w-px-400 mx-auto">
            <div className="app-brand mb-4">
              <a href="index.html" className="app-brand-link gap-2">
                <span className="app-brand-logo demo">
                  <img
                    src="/assets/img/login/website-logo-image.png"
                    className="img-fluid"
                  />
                </span>
              </a>
            </div>

            <h3 className="mb-1 fw-bold">Admin Login</h3>

          </div>
        </div>
      </div>
    </div>
  );
}
