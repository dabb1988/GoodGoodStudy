package com.liubo;

public class HashMapImitate {
//	public V put(K key, V value) {
//	    // �������һ��Ԫ�ص�ʱ����Ҫ�ȳ�ʼ�������С
//	    if (table == EMPTY_TABLE) {
//	        inflateTable(threshold);
//	    }
//	    // ��� key Ϊ null������Ȥ�Ŀ������￴�����ջὫ��� entry �ŵ� table[0] ��
//	    if (key == null)
//	        return putForNullKey(value);
//	    // 1. �� key �� hash ֵ
//	    int hash = hash(key);
//	    // 2. �ҵ���Ӧ�������±�
//	    int i = indexFor(hash, table.length);
//	    // 3. ����һ�¶�Ӧ�±괦���������Ƿ����ظ��� key �Ѿ����ڣ�
//	    //    ����У�ֱ�Ӹ��ǣ�put �������ؾ�ֵ�ͽ�����
//	    for (Entry<K,V> e = table[i]; e != null; e = e.next) {
//	        Object k;
//	        if (e.hash == hash && ((k = e.key) == key || key.equals(k))) {
//	            V oldValue = e.value;
//	            e.value = value;
//	            e.recordAccess(this);
//	            return oldValue;
//	        }
//	    }
//
//	    modCount++;
//	    // 4. �������ظ��� key������ entry ��ӵ������У�ϸ�ں���˵
//	    addEntry(hash, key, value, i);
//	    return null;
//	}
}
