<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreApplicationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'job_id'      => 'required|exists:jobs,id',
            'name'        => 'required|string',
            'email'       => 'required|email',
            'resume_link' => 'required|url',
            'cover_note'  => 'nullable|string',
        ];
    }

    public function messages(): array
    {
        return [
            'job_id.required' => 'Job is required',
            'job_id.exists'   => 'Invalid job selected',
            'name.required'   => 'Name is required',
            'email.required'  => 'Email is required',
            'email.email'     => 'Email format is invalid',
        ];
    }
}
