import { Button, Form, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useFormData } from "../../FormDataContext";

const Filter = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const { updateFormData } = useFormData();

  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast`,
        );
        const res = await response.json();
        setOptions(res?.data?.items[0]?.forecasts || []);
      } catch (e) {
        console.error("Error fetching weather api:", e);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    fetchWeather();
  }, []);

  const onFinish = debounce((values) => {
    const timestamp = Date.now();
    const location = JSON.parse(values?.location);
    const data = { ...location, timestamp };
    const weatherHistory =
      JSON.parse(localStorage.getItem("gabWeatherHistory")) || [];
    weatherHistory.push(data);
    localStorage.setItem("gabWeatherHistory", JSON.stringify(weatherHistory));
    updateFormData(data);
  }, 200);

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
        name="filter"
        onFinish={onFinish}
        style={{
          maxWidth: 800,
          padding: "16px 0",
        }}
      >
        <Form.Item
          name="location"
          label="Location"
          rules={[
            {
              required: true,
              message: "Please select a location",
            },
          ]}
          style={{
            display: "inline-flex",
            marginRight: "16px",
          }}
        >
          <Select
            placeholder="Select a location"
            allowClear
            style={{ width: "300px" }}
            notFoundContent={loading ? "Loading..." : "No results found"}
          >
            {options?.map((option, idx) => (
              <Option
                key={`${option?.area}_${idx}`}
                value={JSON.stringify(option)}
              >
                {option?.area}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Clear
          </Button>
        </Space>
      </Form>
    </>
  );
};

export default Filter;
