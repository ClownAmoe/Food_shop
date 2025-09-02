import Image from "next/image";

import Order from "../../../../components/order/order";
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";

import { CLASSNAME } from "./classname";

export default function BodyImage() {
  return (
    <div className={CLASSNAME.WRAPPER}>
      <div className={CLASSNAME.CONTAINER}>
        <p className={CLASSNAME.PARAGRAPH}>
          Order Restarant food, takeaway and groceries.
        </p>
        <h1 className={CLASSNAME.TITLE_START}>Feast Your Senses,</h1>
        <h1 className={CLASSNAME.TITLE_END}>Fast and Fresh</h1>
        <label htmlFor="search" className={CLASSNAME.LABEL}>
          Enter a postcode to see what we deliver
        </label>
        <div className={CLASSNAME.WRAPPER_INPUT}>
          <Input type="text" variant="Search" placeholder="e.g. EC4R 3TE" />
          <div className={CLASSNAME.BUTTON_WRAPPER}>
            <Button typeOfButton="submit" variation="submit">
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className={CLASSNAME.IMG_WRAPPER}>
        <Image
          src="/picture/Eating1.svg"
          width={805}
          height={537}
          alt="eating"
          className="absolute z-30"
        />
      </div>
      <div className={CLASSNAME.MAIN_IMG_WRAPPER}>
        <Image
          src="/picture/Eating2.svg"
          width={377}
          height={455}
          alt="eating"
          className={CLASSNAME.IMG_MAIN}
        />

        <Image
          src="/picture/image 1.png"
          width={626}
          height={805}
          alt="eating"
          className={CLASSNAME.IMG_SECONDARY}
        />
      </div>
      <span className={CLASSNAME.ORDER_TOP}>
        <Order
          title="We’ve Received your order!"
          text="Awaiting Restaurant acceptance"
          path="picture/1 (2).svg"
        />
      </span>
      <span className={CLASSNAME.ORDER_MID}>
        <Order
          title="Order Accepted!"
          text="Your order will be delivered shortly"
          path="/picture/2.svg"
        />
      </span>
      <span className={CLASSNAME.ORDER_BOT}>
        <Order
          title="Your rider is nearby!"
          text="They're almost there get ready!"
          path="/picture/3.svg"
        />
      </span>
    </div>
  );
}
