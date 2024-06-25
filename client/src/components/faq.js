import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqPage = () => {
  const faqData = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit cards, debit cards, and PayPal. You can choose the preferred payment method during the checkout process.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. However, please note that shipping costs and delivery times may vary depending on the destination. You can check the available shipping options during the checkout process.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, we have a hassle-free return and exchange policy. If you're not satisfied with your purchase or received a defective product, you can initiate a return or exchange within 30 days of the purchase date. Please review our return policy for more details.",
    },
    {
      question: "Are the products covered by warranty?",
      answer:
        "Yes, all our products are covered by a manufacturer's warranty. The duration of the warranty may vary depending on the product. Please refer to the product description or contact our customer support for specific warranty details.",
    },
    {
      question: "Do you offer discounts for bulk orders?",
      answer:
        "Yes, we offer discounts for bulk orders. If you're interested in making a bulk purchase, please reach out to our sales team or contact our customer support to discuss the details and receive a custom quote.",
    },
    {
      question: "Can I track my order?",
      answer:
        'Yes, you can track your order by logging into your account and navigating to the "Order History" section. There, you will find the tracking information for your shipment. Additionally, we will send you email notifications with the tracking details once your order is shipped.',
    },
    {
      question: "What is your customer support contact information?",
      answer:
        "Our customer support team is available to assist you. You can reach us by phone at +1 123 456 7890, or by email at support@electroboom.com. Our support hours are Monday to Friday, 9 AM to 6 PM (EST).",
    },
  ];

  return (
    <div className="faq-main">
      <Container sx={{ paddingTop: "100px" }} maxWidth="md">
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={2}>
            {faqData.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" sx={{ color: "black" }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "gray" }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default FaqPage;
