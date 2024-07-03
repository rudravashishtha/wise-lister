"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateList";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface FormSectionProps {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
  generateButton: boolean;
}

function FormSection({
  selectedTemplate,
  userFormInput = () => {},
  loading = false,
  generateButton = true,
}: FormSectionProps) {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-lg border rounded-lg bg-white">
      <Image
        src={selectedTemplate?.icon || ""}
        alt={selectedTemplate?.name || "Icon"}
        width={70}
        height={70}
        className="mb-4"
      />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={handleSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 mb-7 flex flex-col gap-2">
            <div>
              {item.required ? (
                <>
                  <label className="font-bold">{item.label}</label>
                  <span className="text-red-500"> *</span>
                </>
              ) : (
                <>
                  <label className="font-bold">{item.label}</label> (Optional)
                </>
              )}
            </div>
            {item.fieldType == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                className="p-2 rounded-lg"
                onChange={handleInputChange}
              />
            ) : item.fieldType == "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                className="p-2 rounded-lg"
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}

        {generateButton && (
          <Button disabled={loading} className="w-full py-6">
            {loading ? (
              <>
                <Loader2Icon className="animate-spin mr-3" /> Generating
                content...
              </>
            ) : (
              "Generate Content"
            )}
          </Button>
        )}
      </form>
    </div>
  );
}

export default FormSection;
