// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// ChorusCreateAttachmentRequest chorus create attachment request
//
// swagger:model chorusCreateAttachmentRequest
type ChorusCreateAttachmentRequest struct {

	// content type
	ContentType string `json:"contentType,omitempty"`

	// document category
	DocumentCategory string `json:"documentCategory,omitempty"`

	// filename
	Filename string `json:"filename,omitempty"`

	// key
	Key string `json:"key,omitempty"`

	// location
	Location string `json:"location,omitempty"`

	// value
	Value string `json:"value,omitempty"`
}

// Validate validates this chorus create attachment request
func (m *ChorusCreateAttachmentRequest) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this chorus create attachment request based on context it is used
func (m *ChorusCreateAttachmentRequest) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *ChorusCreateAttachmentRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ChorusCreateAttachmentRequest) UnmarshalBinary(b []byte) error {
	var res ChorusCreateAttachmentRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
