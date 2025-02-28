import React from 'react';
import { PieChart, BarChart, AlertTriangle } from 'lucide-react';

// بيانات وهمية
const riskData = [
  { name: 'تسرب كيميائي', value: 15, color: '#EF4444' },
  { name: 'معدات السلامة', value: 30, color: '#10B981' },
];

const alertData = [
  { id: 1, message: 'تم الكشف عن تسرب كيميائي', severity: 'high', time: 'منذ ساعتين' },
  { id: 2, message: 'مخالفة في ارتداء معدات السلامة', severity: 'medium', time: 'منذ 6 ساعات' },
  { id: 3, message: 'تجاوز حد درجة الحرارة', severity: 'low', time: 'منذ 12 ساعة' },
  { id: 4, message: 'وصول غير مصرح به', severity: 'medium', time: 'منذ 18 ساعة' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">لوحة تحكم السلامة البيئية</h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* بطاقة نظرة عامة على المخاطر */}
        <div className="bg-slate-800 text-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <PieChart className="mr-2 h-5 w-5" />
            المخاطر البيئية
          </h2>
          
          <div className="h-64 flex items-center justify-center">
            {/* رسم بياني دائري بسيط */}
            <div className="relative w-48 h-48">
              {riskData.map((item, index) => {
                const startAngle = index === 0 ? 0 : (riskData[index - 1].value / 45) * 360;
                const angle = (item.value / 45) * 360;
                
                return (
                  <div 
                    key={item.name}
                    className="absolute inset-0"
                    style={{
                      background: `conic-gradient(transparent ${startAngle}deg, ${item.color} ${startAngle}deg, ${item.color} ${startAngle + angle}deg, transparent ${startAngle + angle}deg)`,
                      borderRadius: '50%'
                    }}
                  />
                );
              })}
              <div className="absolute inset-4 bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">45%</span>
              </div>
            </div>
            
            <div className="ml-4">
              {riskData.map(item => (
                <div key={item.name} className="flex items-center mb-2">
                  <div className="w-3 h-3 mr-2" style={{ backgroundColor: item.color }}></div>
                  <span>{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* التنبيهات الفورية */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
            التنبيهات النشطة (24 ساعة)
          </h2>
          
          <div className="max-h-64 overflow-y-auto">
            {alertData.map((alert) => (
              <div 
                key={alert.id} 
                className="p-3 mb-2 border-l-4 rounded bg-gray-50 flex justify-between items-center"
                style={{ 
                  borderLeftColor: 
                    alert.severity === 'high' ? '#EF4444' : 
                    alert.severity === 'medium' ? '#F59E0B' : '#10B981' 
                }}
              >
                <div>
                  <p className="font-medium">{alert.message}</p>
                  <p className="text-sm text-gray-500">{alert.time}</p>
                </div>
                <span 
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: 
                      alert.severity === 'high' ? '#FEE2E2' : 
                      alert.severity === 'medium' ? '#FEF3C7' : '#D1FAE5',
                    color:
                      alert.severity === 'high' ? '#B91C1C' : 
                      alert.severity === 'medium' ? '#B45309' : '#065F46'
                  }}
                >
                  {alert.severity === 'high' ? 'عالي' : alert.severity === 'medium' ? 'متوسط' : 'منخفض'}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* إحصائيات إضافية */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <BarChart className="mr-2 h-5 w-5 text-blue-500" />
            الامتثال للسلامة
          </h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>معدات الحماية الشخصية</span>
                <span>78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>تخزين المواد الكيميائية</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>بروتوكولات الطوارئ</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* الحوادث الأخيرة */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">الحوادث الأخيرة</h2>
          
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">التاريخ</th>
                <th className="text-left py-2">النوع</th>
                <th className="text-left py-2">الموقع</th>
                <th className="text-left py-2">الحالة</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">12 مايو 2025</td>
                <td className="py-2">تسرب كيميائي</td>
                <td className="py-2">المختبر 3</td>
                <td className="py-2"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">قيد المعالجة</span></td>
              </tr>
              <tr className="border-b">
                <td className="py-2">10 مايو 2025</td>
                <td className="py-2">إنذار حريق</td>
                <td className="py-2">المبنى ب</td>
                <td className="py-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">تم الحل</span></td>
              </tr>
              <tr>
                <td className="py-2">8 مايو 2025</td>
                <td className="py-2">عطل في المعدات</td>
                <td className="py-2">خط الإنتاج</td>
                <td className="py-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">تم الحل</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;