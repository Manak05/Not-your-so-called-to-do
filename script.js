class Solution {
public:
    int sumFourDivisors(vector<int>& nums) {
        int sum=0;
        unordered_set<int> s;
        // unordered_map<int,int> seen;
        for(int i:nums){
            if(s.count(i)==0){
            
            vector<int> divisor;
            divisor.push_back(1);
            if(i!=1){
            divisor.push_back(i);
            }
            for(int j=2;j<sqrt(i);j++){
                if(i%j==0){
                    divisor.push_back(j);
                     
                    divisor.push_back((i/j));
                }
                
            }
            if(divisor.size()==4){
            
            for(int k=0;k<4;k++){
                 sum+=divisor[k];
            }
        
        }
            }
            s.insert(i);
            }
        
        return sum;
    }
};