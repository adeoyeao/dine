import { StyledForm, StyledInput } from "./Form.styles";
import React, { ReactElement, useState } from "react";
import { Text, Button } from "components";
import theme from "theme";
import { useRouter } from "next/router";

const Form = (): ReactElement => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    month: "",
    date: "",
    year: "",
    hour: "",
    minute: "",
  });

  const [confirmed, setConfirmed] = useState(false);
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setConfirmed(true)
    setTimeout(() => router.push('/'), 5000)
  };

  const bookingForm = (
    <StyledForm autoComplete="new-password">
      <StyledInput
        isActive={true}
        isValid={true}
        value={input.name}
        onChange={handleChange}
        name="name"
        placeholder="Name"
        className="input_text"
        autoComplete="new-password"
        autoCapitalize="off"
      />
      <StyledInput
        isActive={true}
        isValid={true}
        value={input.email}
        onChange={handleChange}
        name="email"
        placeholder="Email"
        className="input_text"
        autoComplete="new-password"
        autoCapitalize="off"
      />
      <div className="dates">
        <Text textType="h4" color={theme.colors.cod} text="Pick a Date" />
        <span>
          <StyledInput
            isActive={true}
            isValid={true}
            value={input.date}
            onChange={handleChange}
            name="date"
            placeholder="DD"
            type="number"
            max={31}
            min={1}
          />
          <StyledInput
            isActive={true}
            isValid={true}
            value={input.month}
            onChange={handleChange}
            name="month"
            placeholder="MM"
            type="number"
            max={12}
            min={1}
          />
          <StyledInput
            isActive={true}
            isValid={true}
            value={input.year}
            onChange={handleChange}
            name="year"
            placeholder="YYYY"
            type="number"
            min={2021}
            max={2025}
          />
        </span>
      </div>
      <div className="time">
        <Text textType="h4" color={theme.colors.cod} text="Pick a Time" />
        <span>
          <StyledInput
            isActive={true}
            isValid={true}
            value={input.hour}
            onChange={handleChange}
            name="hour"
            placeholder="00"
            type="number"
            min={8}
            max={23}
          />
          <StyledInput
            isActive={true}
            isValid={true}
            value={input.minute}
            onChange={handleChange}
            name="minute"
            placeholder="00"
            type="number"
            min={0}
            max={59}
          />
        </span>
      </div>
      <Button
        buttonType="light"
        text="Make Reservation"
        isActive
        onClick={(e) => handleClick(e)}
      />
    </StyledForm>
  );

  const confirmBooking = (
      <StyledForm>
          <Text 
          textType='h3'
          text='Your booking is confirmed. We look forward to your visit.'
          color={theme.colors.shuttle}
          />
      </StyledForm>
  )

  return <>{!confirmed ? bookingForm : confirmBooking}</>;
};

export default Form;
