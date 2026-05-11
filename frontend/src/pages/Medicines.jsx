import React, { useState } from 'react';
import { Search, MapPin, Package, Heart, Store, Map, ChevronRight } from 'lucide-react';

function Medicines() {
  const [searchQuery, setSearchQuery] = useState('');

  const medicinesList = [
    {
      id: 1,
      name: 'Amoxicillin 500mg',
      brand: 'Generic',
      price: '$12.99',
      stockStatus: 'In Stock',
      stockColor: 'text-emerald-600 bg-emerald-100',
      pharmacies: 5,
      favorite: true
    },
    {
      id: 2,
      name: 'Lisinopril 10mg',
      brand: 'Zestril',
      price: '$24.50',
      stockStatus: 'Low Stock',
      stockColor: 'text-orange-600 bg-orange-100',
      pharmacies: 2,
      favorite: false
    },
    {
      id: 3,
      name: 'Ibuprofen 400mg',
      brand: 'Advil',
      price: '$8.49',
      stockStatus: 'In Stock',
      stockColor: 'text-emerald-600 bg-emerald-100',
      pharmacies: 8,
      favorite: true
    },
    {
      id: 4,
      name: 'Azithromycin 250mg',
      brand: 'Zithromax',
      price: '$35.00',
      stockStatus: 'Out of Stock',
      stockColor: 'text-red-600 bg-red-100',
      pharmacies: 0,
      favorite: false
    }
  ];

  const nearbyPharmacies = [
    { name: 'City Health Pharmacy', distance: '0.5 miles', status: 'Open until 10 PM', priceLevel: '$$' },
    { name: 'Green Cross Meds', distance: '1.2 miles', status: 'Open 24/7', priceLevel: '$' },
    { name: 'Wellness Corner', distance: '2.0 miles', status: 'Closes at 8 PM', priceLevel: '$$$' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Medicine Tracker</h2>
          <p className="text-slate-500 mt-1">Search medicines, compare prices, and check local stock.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 rounded-xl font-semibold transition-colors shadow-sm">
          <Map className="w-4 h-4" />
          Map View
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
        <div className="pl-4 pr-2">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="w-full bg-transparent border-none py-3 focus:outline-none text-slate-700 placeholder-slate-400"
          placeholder="Search for medicines by name or brand..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="px-6 py-2.5 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors mr-1">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Medicine List */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
            <Package className="w-5 h-5 text-blue-500" />
            Results & Saved Medicines
          </h3>
          
          <div className="grid gap-4">
            {medicinesList.map(med => (
              <div key={med.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <button className={`mt-1 p-1.5 rounded-full transition-colors ${med.favorite ? 'text-red-500 bg-red-50' : 'text-slate-300 hover:bg-slate-50 hover:text-red-400'}`}>
                    <Heart className="w-5 h-5" fill={med.favorite ? "currentColor" : "none"} />
                  </button>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">{med.name}</h4>
                    <p className="text-sm text-slate-500">Brand: {med.brand}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${med.stockColor}`}>
                        {med.stockStatus}
                      </span>
                      {med.pharmacies > 0 && (
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                          <Store className="w-3 h-3" /> {med.pharmacies} nearby
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100">
                  <p className="text-2xl font-bold text-slate-800">{med.price}</p>
                  <p className="text-xs text-slate-500 sm:mt-1">avg. local price</p>
                  <button className="sm:mt-3 flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Compare <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Pharmacies */}
        <div className="space-y-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-emerald-500" />
            Nearby Pharmacies
          </h3>
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">Within 5 miles</span>
              <button className="text-xs font-semibold text-blue-600 hover:underline">Change</button>
            </div>
            
            <div className="divide-y divide-slate-100">
              {nearbyPharmacies.map((pharmacy, idx) => (
                <div key={idx} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-800 text-sm">{pharmacy.name}</h4>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{pharmacy.priceLevel}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-2">
                    <span className="text-emerald-600 font-medium">{pharmacy.status}</span>
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {pharmacy.distance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full p-3 text-sm font-bold text-blue-600 hover:bg-slate-50 transition-colors border-t border-slate-100">
              View All Pharmacies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medicines;
