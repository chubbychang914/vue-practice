<template lang="pug">
#FormItems
  Form.FormItems(:model="formItem", :label-width="100")
    FormItem(label="Input")
      Input(v-model="formItem.input", placeholder="Enter something")
    FormItem(label="Select", placeholder)
      Select(v-model="formItem.select", placeholder="Choose Your Starter")
        Option(value="chimchar") {{ "chimchar" }}
        Option(value="turtwig") {{ "turtwig" }}
        Option(value="piplup") {{ "piplup" }}
    FormItem(label="Date Picker")
      Row
        Col(span="11")
          DatePicker(type="date", placeholder="Select a Date")
        Col(span="2", style="text-align: center") {{ "-" }}
        Col(span="11")
          TimePicker(type="time", placeholder="Select a Time")
    FormItem(label="Radio")
      RadioGroup(v-model="formItem.radio")
        Radio(label="Sinnoh") {{ "Sinnoh" }}
        Radio(label="Kanto") {{ "Kanto" }}
        Radio(label="Taiwan") {{ "Taiwan" }}
    FormItem(label="CheckBox")
      CheckboxGroup(
        v-model="formItem.checkbox",
        style="display: flex; flex-direction: column"
      )
        Checkbox(label="eat")
        Checkbox(label="sleep")
        Checkbox(label="run")
        Checkbox(label="what")
    FormItem(label="Switch")
      i-switch(v-model="formItem.switch", size="large")
        span(slot="open") {{ "On" }}
        span(slot="close") {{ "Off" }}
    FormItem(label="Slider")
      Slider(v-model="formItem.slider", range)
    FormItem(label="TextArea")
      Input(
        v-model="formItem.textarea",
        type="textarea",
        placeholder="輸入你要的東西",
        :autosize="{ minRows: 3, maxRows: 8 }"
      )
    FormItem
      Button(type="primary") {{ "Submit" }}
      Button(style="margin-left: 8px") {{ "Cancel" }}
</template>

<script>
export default {
  data() {
    return {
      formItem: {
        input: "",
        select: "",
        radio: "Sinnoh",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [60, 80],
        textarea: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#FormItems {
  .FormItems {
    background-color: lightcyan;
    padding: 50px;
    margin: 50px;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>