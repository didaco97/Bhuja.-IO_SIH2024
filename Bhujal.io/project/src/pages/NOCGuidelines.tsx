import React from 'react';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function NOCGuidelines() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-primary/10 p-3 rounded-lg">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">NOC Guidelines</h1>
            <p className="text-gray-600">Guidelines for obtaining No Objection Certificate for groundwater extraction</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Requirements Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Requirements</h2>
            <ul className="space-y-3">
              {[
                'Valid ID Proof',
                'Land Ownership Documents',
                'Site Plan/Layout',
                'Water Requirement Details',
                'Proposed Usage Plan'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Application Process</h2>
            <div className="space-y-4">
              {[
                'Submit online application through the portal',
                'Upload required documents',
                'Pay processing fees',
                'Site inspection by authorities',
                'NOC issuance upon approval'
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                    <span className="font-semibold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center space-x-2 mb-3">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <h3 className="font-semibold text-yellow-800">Important Notes</h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-yellow-800">
              <li>NOC is mandatory for all groundwater extraction</li>
              <li>Validity period varies based on category</li>
              <li>Regular monitoring and reporting required</li>
              <li>Non-compliance may lead to penalties</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}