import { OptToggle } from "./optionsToggle.styled";

export default function OptionsToggle() {
  return (
    <OptToggle>
      <input type="checkbox" />
      <label htmlFor="format">ფორმატის შენარჩუნება</label>
    </OptToggle>
  );
}
