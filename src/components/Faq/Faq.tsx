import { ReactNode, useRef, useState } from "react";

import { AccordionContainer, AccordionItem, AccordionItemContent, AccordionItemControl, AccordionItemTitle, FaqHeader, FaqStyled } from "./Faq.styled";

function FaqItem({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <AccordionItem>
      <AccordionItemControl
        isOpen={isOpen}
        onClick={handleClick}
      />
          <AccordionItemTitle
            onClick={handleClick}
          >
            {title}
          </AccordionItemTitle>
          <AccordionItemContent
            style={{ height: isOpen ? ref?.current?.offsetHeight : 0 }}
          >
            <div ref={ref}>
              {children}
            </div>
          </AccordionItemContent>
    </AccordionItem>
  )
}

export function Faq() {
  return (
    <FaqStyled>
      <FaqHeader textAlign="center">
        Frequently Asked<br />
        <span style={{color: '#6C5FBC'}}>Questions</span>
      </FaqHeader>
      <AccordionContainer>
        <FaqItem
          title={'How long does delivery take?'}
        >
          You Can Get Information By Contacting Our Support Team Have 24/7 Service.
          <br />
          What’s The Difference Between Free And Paid Plan ?
        </FaqItem>
        <FaqItem
          title={'How Does It Work ?'}
        >
          You Can Get Information By Contacting Our Support Team Have 24/7 Service.
          <br />
          What’s The Difference Between Free And Paid Plan ?
        </FaqItem>
        <FaqItem
          title={'How does your food delivery service work?'}
        >
          You Can Get Information By Contacting Our Support Team Have 24/7 Service.
          <br />
          What’s The Difference Between Free And Paid Plan ?
        </FaqItem>
        <FaqItem
          title={'What payment options do you accept?'}
        >
          You Can Get Information By Contacting Our Support Team Have 24/7 Service.
          <br />
          What’s The Difference Between Free And Paid Plan ?
        </FaqItem>
        <FaqItem
          title={'Do you offer discounts or promotions?'}
        >
          You Can Get Information By Contacting Our Support Team Have 24/7 Service.
          <br />
          What’s The Difference Between Free And Paid Plan ?
        </FaqItem>
      </AccordionContainer>
    </FaqStyled>
  )
}
