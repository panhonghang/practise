import java.util.*;

class Solution {
    public List<Integer> partitionLabels(String S) {
        int pre = 0,
            next = 0,
            temp = 0;
            
        char[] chars = S.toCharArray();
        List<Integer> resArr = new ArrayList<>();

        for(int i = 0; i < S.length(); i++) {
            temp = S.lastIndexOf(chars[i]);
            if(temp >= next) next = temp;

            if(i == next) {
                resArr.add(next - pre + 1);
                pre = i + 1;
            }
        }
        
        return resArr;
    }
}