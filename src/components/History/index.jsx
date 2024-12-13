import React, { useState, useEffect } from "react";
import { Divider, Row, Col, Button, Typography } from "antd";
import { useFormData } from "../../FormDataContext";
import { DeleteOutlined } from "@ant-design/icons";
import { formattedSGTimeZone } from "../../utils";

const History = () => {
  const { Text } = Typography;
  const [history, setHistory] = useState([]);
  const { formData } = useFormData();
  useEffect(() => {
    const weatherHistory =
      JSON.parse(localStorage.getItem("gabWeatherHistory")) || [];
    setHistory(weatherHistory);
  }, [formData]);

  const removeHistory = (timestampToDelete) => {
    const updatedHistory = history.filter(
      (item) => item.timestamp !== timestampToDelete,
    );
    localStorage.setItem("gabWeatherHistory", JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
  };

  return (
    <>
      <h1>Search History</h1>
      <Divider style={{ margin: 0, borderColor: "#000" }} />

      {history.length === 0 ? (
        <Text>No Record</Text>
      ) : (
        history
          ?.slice()
          ?.reverse()
          .map((entry, idx) => (
            <Row
              key={`${entry.timestamp}_${idx}`}
              gutter={[16, 8]}
              align="middle"
            >
              <Col span={8}>
                <Text>{entry.area}</Text>
              </Col>
              <Col span={8}>
                <Text>{entry.forecast}</Text>
              </Col>
              <Col span={6}>
                <Text> {formattedSGTimeZone(entry?.timestamp)}</Text>
              </Col>
              <Col span={2}>
                <Button
                  type="danger"
                  icon={<DeleteOutlined />}
                  onClick={() => removeHistory(entry.timestamp)}
                />
              </Col>
            </Row>
          ))
      )}
    </>
  );
};

export default History;
