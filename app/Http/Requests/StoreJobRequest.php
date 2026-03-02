<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJobRequest extends FormRequest
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
            'title'       => 'required|string',
            'company'     => 'required|string',
            'location'    => 'required|string',
            'category'    => 'required|string',
            'description' => 'required|string',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required'       => 'Title is required',
            'company.required'     => 'Company is required',
            'location.required'    => 'Location is required',
            'category.required'    => 'Category is required',
            'description.required' => 'Description is required',
        ];
    }
}
