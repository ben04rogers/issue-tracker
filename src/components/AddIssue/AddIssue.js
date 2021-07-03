import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
function AddIssue() {
  return (
    <div className="add-issue">
      <Form>
        <FormGroup className="my-3">
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            placeholder="Description of Issue..."
          />
        </FormGroup>
        <FormGroup className="my-3">
          <Label for="assignto">Assign To</Label>
          <Input type="select" name="select" id="assignto">
            <option>Morten</option>
            <option>Ben</option>
            <option>John</option>
            <option>Josh</option>
            <option>Sam</option>
          </Input>
        </FormGroup>
        <FormGroup className="my-3">
          <Label for="priority">Priority</Label>
          <Input type="select" name="select" id="priority">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </Input>
        </FormGroup>

        <button class="btn btn-primary">Add</button>
      </Form>
    </div>
  );
}

export default AddIssue;
