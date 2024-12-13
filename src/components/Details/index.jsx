import React from "react";
import { useFormData } from "../../FormDataContext";
import { Col, Row, Typography } from "antd";
import { formattedSGTimeZone } from "../../utils";

const Details = () => {
  const { Text } = Typography;
  const { formData } = useFormData();

  if (!formData) return;

  // const formattedTime = new Intl.DateTimeFormat("en-US", {
  //   timeStyle: "long",
  //   dateStyle: "medium",
  //   timeZone: "Asia/Singapore",
  // }).format(new Date(formData?.timestamp));

  return (
    <>
      <Row gutter={[16, 8]}>
        <Col xs={6} sm={6} md={6} lg={4}>
          <Text strong>Location:</Text>
        </Col>
        <Col xs={18} sm={18} md={18} lg={20}>
          <Text style={{ color: "#1890ff" }}>{formData?.area}</Text>
        </Col>
      </Row>

      <Row gutter={[16, 8]}>
        <Col xs={6} sm={6} md={6} lg={4}>
          <Text strong>Forecast:</Text>
        </Col>
        <Col xs={18} sm={18} md={18} lg={20}>
          <Text style={{ color: "#1890ff" }}>{formData?.forecast}</Text>
        </Col>
      </Row>

      <Row gutter={[16, 8]}>
        <Col xs={6} sm={6} md={6} lg={4}>
          <Text strong>Time:</Text>
        </Col>
        <Col xs={18} sm={18} md={18} lg={20}>
          <Text style={{ color: "#1890ff" }}>
            {formattedSGTimeZone(formData?.timestamp)}
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default Details;
