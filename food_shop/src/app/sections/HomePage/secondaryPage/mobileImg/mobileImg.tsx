import Image from "next/image";

import { CLASSNAME } from "./classname";

export default function MobileImg() {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <div className={CLASSNAME.IMG_CONTAINER}>
        <Image
          src="/mobile/mobile.png"
          width={832}
          height={651}
          alt="people"
          className={CLASSNAME.MAIN_IMG}
        />
        <Image
          src="/mobile/mobile.png"
          width={832}
          height={651}
          alt="shadow"
          className={CLASSNAME.SECOND_IMG}
        />
      </div>
      <div className={CLASSNAME.CONTAINER}>
        <div className={CLASSNAME.BLACK_TEXT}>
          <Image src="header/LOGO.svg" width={268} height={66} alt="logo" />
          <p className={CLASSNAME.BLACK_PARAGRAPH}>ing is more</p>
        </div>
        <div className={CLASSNAME.TEXT_WRAPPER}>
          <p className={CLASSNAME.SIMBIOTIC_TEXT}>
            <span className={CLASSNAME.SIMBIOTIC_START}>Personalised</span>
            <span className={CLASSNAME.SIMBIOTIC_END}> & Instant</span>
          </p>
        </div>
        <p className={CLASSNAME.PARAGRAPH}>
          Download the Order.uk app for faster ordering
        </p>
        <div className={CLASSNAME.DOWNLOAD_FLEX}>
          <a href="">
            <Image
              src="mobile/apple.svg"
              height={61}
              width={203}
              alt="apple"
              className={CLASSNAME.APPLE_DOWNLOAD}
            />
          </a>
          <a href="">
            <Image
              src="mobile/google.svg"
              height={61}
              width={203}
              alt="google"
              className={CLASSNAME.GOOGLE_DOWNLOAD}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
